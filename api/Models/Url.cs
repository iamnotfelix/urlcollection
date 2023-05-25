namespace api.Models
{
    public record Url
    {
        public int Id { get; set; }
        public string URL { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Category { get; set; }
        public int User { get; set; }
    }
}