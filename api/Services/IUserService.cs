using api.Dtos;
using api.Models;

namespace api.Services
{
    public interface IUserService
    {
        Task<User> Login(LoginUserDto user);
    }
}