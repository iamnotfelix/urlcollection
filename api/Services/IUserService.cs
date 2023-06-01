using api.Dtos;
using api.Models;

namespace api.Services
{
    public interface IUserService
    {
        Task<LoginResponse> Login(LoginUserDto user);
    }
}