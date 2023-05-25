using api.Models;

namespace api.Services
{
    public interface IUrlService
    {
        Task<List<Url>> GetUrls(int userId, int pageSize, int pageNumber);
        Task<Url> GetUrlById(int urlId);
    }
}