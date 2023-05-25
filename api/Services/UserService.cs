using api.Dtos;
using api.Models;
using api.Repositories;

namespace api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository repository;
        public UserService(IUserRepository repository)
        {
            this.repository = repository;    
        }

        public async Task<User> Login(LoginUserDto user)
        {
            var u = await this.repository.GetUserByUsername(user.Username, user.Password);

            if (u.Password != user.Password)
            {
                throw new Exception("Username or password is invalid.");
            }

            return u;
        }
    }
}