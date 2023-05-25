using api.Dtos;
using api.Models;

namespace api.Services
{
    public interface IUrlService
    {
        Task<List<Url>> GetUrls(int userId, int pageSize, int pageNumber);
        Task<Url> GetUrlById(int urlId);
        Task AddUrl(AddUrlDto url, int userId);
        Task UpdateUrl(UpdateUrlDto url);
        Task DeleteUrl(int urlId);
    }
}