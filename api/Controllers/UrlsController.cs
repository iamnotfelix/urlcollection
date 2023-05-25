using api.Dtos;
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
        public async Task<ActionResult<IEnumerable<Url>>> GetUrlsAsync([FromQuery] int userId, [FromQuery] int pageSize, [FromQuery] int page) 
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
        
        // GET /urls/:urlId
        [HttpGet("{urlId}")]
        public async Task<ActionResult<Url>> GetUrlByIdAsync(int urlId) 
        {
            try
            {
                var url = await this.service.GetUrlById(urlId);
                return Ok(url);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
        // POST /urls?userId=:userId
        [HttpPost]
        public async Task<ActionResult> AddUrlAsync(AddUrlDto url, [FromQuery] int userId) 
        {
            try
            {
                await this.service.AddUrl(url, userId);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}