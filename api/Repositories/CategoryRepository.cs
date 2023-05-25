using api.Models;
using MySqlConnector;

namespace api.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly MySqlConnection connection;

        public CategoryRepository(MySqlConnection connection)
        {
            this.connection = connection;
        }

        public async Task<List<Category>> GetCategories()
        {
            List<Category> categories = new List<Category>();

            await this.connection.OpenAsync();

            using (var command = this.connection.CreateCommand())
            {
                command.CommandText = @"select * from categories;";

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        var category = new Category
                        {
                            Id = reader.GetInt32(0),
                            Name = reader.GetString(1)
                        };
                        categories.Add(category);
                    }
                }
            }

            this.connection.Close();

            return categories;
        }
    }
}