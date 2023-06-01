using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record LoginResponse
    {
        public int Id { get; set; } 
        public string Username { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;
    }
}