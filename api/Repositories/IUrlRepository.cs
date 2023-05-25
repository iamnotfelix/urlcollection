using api.Models;

namespace api.Repositories
{
    public interface IUrlRepository
    {
        Task<List<Url>>GetUrls(int userId, int pageSize, int pageNumber);
        Task<Url> GetUrlById(int urlId);
        Task<List<Url>> GetUrlByCategory(int categoryId, int userId, int pageSize, int pageNumber);
        Task<int> GetUrlCount(int userId);
        Task<int> GetUrlCountByCategory(int userId, int categoryId);
        Task AddUrl(string URL, string description, int category, int userId);
        Task UpdateUrl(int id, string URL, string description);
        Task DeleteUrl(int urlId);
    }
}