using api.Models;

namespace api.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetCategories();
    }
}