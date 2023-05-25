using System.Text.RegularExpressions;
using api.Dtos;

namespace api.Services
{
    public static class Validations
    {
        public static void Validate(this AddUrlDto url) 
        {
            var urlRegex =new Regex("^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$");

            if (url is null)
            {
                throw new Exception("URL not found.");
            }
            if (url.URL is not null && (!urlRegex.IsMatch(url.URL) || url.URL!.Count() == 0))
            {
                throw new Exception("URL is not valid.");
            } 
            if (url.Description is not null && url.Description.Count() <= 0) 
            {
                throw new Exception("Description cannot be empty.");
            }
        }
        
        public static void Validate(this UpdateUrlDto url) 
        {
            var urlRegex =new Regex("^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$");

            if (url is null)
            {
                throw new Exception("URL not found.");
            }
            if (url.URL is not null && (!urlRegex.IsMatch(url.URL) || url.URL!.Count() == 0))
            {
                throw new Exception("URL is not valid.");
            } 
            if (url.Description is not null && url.Description.Count() <= 0) 
            {
                throw new Exception("Description cannot be empty.");
            }
        }
    }
}