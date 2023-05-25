using api.Models;
using MySqlConnector;

namespace api.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MySqlConnection connection;

        public UserRepository(MySqlConnection connection)
        {
            this.connection = connection;
        }

        public async Task<User> GetUserByUsername(string username, string password)
        {
            await this.connection.OpenAsync();

            using (var command = this.connection.CreateCommand())
            {
                command.CommandText = @"select * from users where username = @Username;";
                command.Parameters.AddWithValue("@Username", username);

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        var user = new User
                        {
                            Id = reader.GetInt32(0),
                            Username = reader.GetString(1),
                            Password = reader.GetString(2)
                        };

                        return user;
                    }
                }
            }

            this.connection.Close();

            throw new Exception("Username or password is invalid.");
        }
    }
}