using api.Models;
using api.Repositories;

namespace api.Services
{
    public class UrlService : IUrlService
    {
        private readonly IUrlRepository repository;

        public UrlService(IUrlRepository repository)
        {
            this.repository = repository;
        }

        public async Task<List<Url>> GetUrls(int userId, int pageSize, int pageNumber)
        {
            return await this.repository.GetUrls(userId, pageSize, pageNumber);
        }
    }
}