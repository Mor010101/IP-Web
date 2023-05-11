using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Security.Cryptography;
using System.Text;

namespace IP_Web.Services;

public class AuthService
{
    private readonly IMongoCollection<User> _userCollection;
    public AuthService(
        IOptions<CareBandDbSettings> careBandDbSettings)

    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _userCollection = mongoDatabase.GetCollection<User>(
            careBandDbSettings.Value.UserCollectionName);
    }
    public async Task<List<User>> GetAsync() =>
      await _userCollection.Find(_ => true).ToListAsync();
    public async Task<User?> verifyUser(string email, string password)
    {
        var user = await _userCollection.Find(x => x.Email.Equals(email, StringComparison.OrdinalIgnoreCase)).FirstOrDefaultAsync();
        if (user != null)
        {
            var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(password, user.Salt, 35000, HashAlgorithmName.SHA512, 64);
            if (CryptographicOperations.FixedTimeEquals(hashToCompare, Convert.FromHexString(user.Password)))
            {
                return user;
            }
        }
        
        return null;
    }
    private string HashPassword(string password, out byte[] salt)
    {
        salt = RandomNumberGenerator.GetBytes(64);
        var hash = Rfc2898DeriveBytes.Pbkdf2(
            Encoding.UTF8.GetBytes(password),
            salt,
            35000,
            HashAlgorithmName.SHA512,
            64);

        return Convert.ToHexString(hash);
    }
}
