using api.Dtos;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService service;

        public UsersController(IUserService service) 
        {
            this.service = service;
        }

        // GET /users
        [HttpPost]
        public async Task<ActionResult<LoginResponse>> Login(LoginUserDto user) 
        {
            try
            {
                var u = await this.service.Login(user);
                return Ok(u);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
    }
}