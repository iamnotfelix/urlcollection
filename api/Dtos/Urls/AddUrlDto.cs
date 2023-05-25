using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record AddUrlDto
    {
        [Required]
        public string URL { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public int Category { get; set; }
    }
}