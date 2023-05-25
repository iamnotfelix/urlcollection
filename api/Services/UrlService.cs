using api.Dtos;
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

        public async Task<Url> GetUrlById(int urlId)
        {
            return await this.repository.GetUrlById(urlId);
        }

        public async Task AddUrl(AddUrlDto url, int userId)
        {
            url.Validate();

            await this.repository.AddUrl(url.URL, url.Description, url.Category, userId);
        }

        public async Task UpdateUrl(UpdateUrlDto url)
        {
            url.Validate();

            await this.repository.UpdateUrl(url.Id, url.URL, url.Description);
        }

        public async Task DeleteUrl(int urlId)
        {
            await this.repository.DeleteUrl(urlId);
        }
    }
}