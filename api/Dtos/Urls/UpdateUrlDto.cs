using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record UpdateUrlDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string URL { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
    }
}