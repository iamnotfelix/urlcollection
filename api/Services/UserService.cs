using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using api.Dtos;
using api.Models;
using api.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository repository;
        public UserService(IUserRepository repository)
        {
            this.repository = repository;    
        }

        public async Task<LoginResponse> Login(LoginUserDto user)
        {
            var u = await this.repository.GetUserByUsername(user.Username, user.Password);

            if (u.Password != user.Password)
            {
                throw new Exception("Username or password is invalid.");
            }

            var token = this.CreateJwtToken(u);


            return new LoginResponse {
                Id = u.Id,
                Username = u.Username,
                Token = token
            };
        }

        private string CreateJwtToken(User user) 
        {
            
            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username!)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("fsadjlksfadjlvnlnkj432j345jk345j345jk3433jk5334j4jkl34k3kjl453kj345345l354lk354354jlkmslakm")
            );

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}