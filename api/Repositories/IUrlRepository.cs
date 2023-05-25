using api.Models;

namespace api.Repositories
{
    public interface IUrlRepository
    {
        Task<List<Url>>GetUrls(int userId, int pageSize, int pageNumber);
        Task<Url> GetUrlById(int urlId);
        Task AddUrl(string URL, string description, int category, int userId);
        Task UpdateUrl(int id, string URL, string description);
    }
}