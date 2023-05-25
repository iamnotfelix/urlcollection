using api.Dtos;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService service;

        public CategoriesController(ICategoryService service) 
        {
            this.service = service;
        }


        // GET /categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoriesAsync() 
        {
            try
            {
                var categories = await this.service.GetCategories();
                return Ok(categories);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
    }
}