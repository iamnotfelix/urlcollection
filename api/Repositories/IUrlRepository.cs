using api.Models;

namespace api.Repositories
{
    public interface IUrlRepository
    {
        Task<List<Url>>GetUrls(int userId, int pageSize, int pageNumber);
        Task<Url> GetUrlById(int urlId);
    }
}