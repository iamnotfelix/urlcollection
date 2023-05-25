using api.Models;

namespace api.Services
{
    public interface ICategoryService
    {
        Task<List<Category>> GetCategories();
    }
}