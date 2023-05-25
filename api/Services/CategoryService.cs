using api.Models;
using api.Repositories;

namespace api.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository repository;
        public CategoryService(ICategoryRepository repository)
        {
            this.repository = repository;    
        }

        public async Task<List<Category>> GetCategories()
        {
            return await this.repository.GetCategories();
        }
    }
}