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

        public async Task<PagedUrlDto> GetUrls(int userId, int pageSize, int pageNumber)
        {
            var urls = await this.repository.GetUrls(userId, pageSize, pageNumber);
            var totalUrls = await this.repository.GetUrlCount(userId);
            double totalPages = (double) totalUrls / (double) pageSize;

            var pagedUrls = new PagedUrlDto
            {
                TotalPages = (int)Math.Ceiling(totalPages),
                Urls = urls
            };

            return pagedUrls;
        }

        public async Task<Url> GetUrlById(int urlId)
        {
            return await this.repository.GetUrlById(urlId);
        }

        public async Task<PagedUrlDto> GetUrlByCategory(int categoryId, int userId, int pageSize, int pageNumber)
        {
            var urls = await this.repository.GetUrlByCategory(categoryId, userId, pageSize, pageNumber);
            var totalUrls = await this.repository.GetUrlCountByCategory(userId, categoryId);
            double totalPages = (double) totalUrls / (double) pageSize;

            var pagedUrls = new PagedUrlDto
            {
                TotalPages = (int)Math.Ceiling(totalPages),
                Urls = urls
            };

            return pagedUrls;
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