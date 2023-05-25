using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UrlsController : ControllerBase
    {
        private readonly IUrlService service;

        public UrlsController(IUrlService service) 
        {
            this.service = service;
        }


        // GET /urls?userId=:userId&pageSize=:pageSize&page=:page
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Url>>> GetUrlAsync([FromQuery]int userId, [FromQuery]int pageSize, [FromQuery]int page) 
        {
            try
            {
                var urls = await this.service.GetUrls(userId, pageSize, page);
                return Ok(urls);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}