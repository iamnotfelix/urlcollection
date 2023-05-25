using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record LoginUserDto
    {
        [Required]
        public string Username { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}