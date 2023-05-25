using api.Models;

namespace api.Dtos
{
    public record PagedUrlDto
    {
        public int TotalPages { get; set; }
        public List<Url> Urls { get; set; } = new List<Url>();
    }
}