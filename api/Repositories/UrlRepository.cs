using api.Models;
using MySqlConnector;

namespace api.Repositories
{
    public class UrlRepository : IUrlRepository
    {
        private readonly MySqlConnection connection;

        public UrlRepository(MySqlConnection connection)
        {
            this.connection = connection;
        }

        public async Task<List<Url>> GetUrls(int userId, int pageSize, int pageNumber)
        {
            List<Url> urls = new List<Url>();

            await this.connection.OpenAsync();

            using (var command = this.connection.CreateCommand())
            {
                command.CommandText = @"select * from urls where user = @UserId limit @From, @PageSize;";
                command.Parameters.AddWithValue("@UserId", userId);
                command.Parameters.AddWithValue("@From", (pageNumber - 1) * pageSize);
                command.Parameters.AddWithValue("@PageSize", pageSize);

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        var url = new Url
                        {
                            Id = reader.GetInt32(0),
                            URL = reader.GetString(1),
                            Description = reader.GetString(2),
                            Category = reader.GetInt32(3),
                            User = reader.GetInt32(4)
                        };
                        urls.Add(url);
                    }
                }
            }

            return urls;
        }

        public async Task<Url> GetUrlById(int urlId)
        {
            await this.connection.OpenAsync();

            using (var command = this.connection.CreateCommand())
            {
                command.CommandText = @"select * from urls where id = @Id;";
                command.Parameters.AddWithValue("@Id", urlId);

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        var url = new Url
                        {
                            Id = reader.GetInt32(0),
                            URL = reader.GetString(1),
                            Description = reader.GetString(2),
                            Category = reader.GetInt32(3),
                            User = reader.GetInt32(4)
                        };
                        return url;
                    }
                }
            }
            throw new Exception("Url not found!");
        }
    }
}