using api.Models;

namespace api.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserByUsername(string username, string password);
    }
}