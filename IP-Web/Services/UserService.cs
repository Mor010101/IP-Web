using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Security.Cryptography;
using System.Text;

namespace IP_Web.Services;

public class UserService
{
    private readonly IMongoCollection<User> _userCollection;
    private readonly IMapper _mapper;
    public UserService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)

    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _userCollection = mongoDatabase.GetCollection<User>(
            careBandDbSettings.Value.UserCollectionName);
        _mapper = mapper;
    }
    public async Task<List<User>> GetAsync() =>
      await _userCollection.Find(_ => true).ToListAsync();
    public async Task<User?> GetByIdAsync(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(UserDTO userDTO)
    {
        var user = _mapper.Map<User>(userDTO);

        user.Password = HashPassword(user.Password, out var salt);
        user.Salt = salt;
 
        await _userCollection.InsertOneAsync(user);
    }
    public async Task UpdateAsync(string id, UserDTO userDTO)
    {
        var user = _mapper.Map<User>(userDTO);
        user.Id = id;

        user.Password = HashPassword(user.Password, out var salt);
        user.Salt = salt;

        await _userCollection.ReplaceOneAsync(x => x.Id == id, user);
    }
    public async Task RemoveAsync(string id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);

    public async Task<List<UserTableDTO>> GetAllForAdminAsync(string id)
    {
        var result = await _userCollection.Find(x => x.IdAdmin == id).ToListAsync();
        List<UserTableDTO> userTableDTOs = new List<UserTableDTO>();

        result.ForEach(x => userTableDTOs.Add(_mapper.Map<UserTableDTO>(x)));

        return userTableDTOs;
    }

    //this is utterly stupid 
    public async Task UpdateListsAsync(string id, string istoricMedical, string type)
    {
        var user = await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        switch (type)
        {
            case "istoricMedical":
                user.IstoricMedical.Add(istoricMedical);
                break;

            case "alergii":
                user.Alergii.Add(istoricMedical);
                break;

            case "cardio":
                user.ConsulatiiCardio.Add(istoricMedical);
                break;
        }
        
        await _userCollection.ReplaceOneAsync(x => x.Id == id, user);
    }

    public async Task DeleteListsAsync(string id, string istoricMedical, string type)
    {
        var user = await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        switch (type)
        {
            case "istoricMedical":
                user.IstoricMedical.Remove(istoricMedical);
                break;

            case "alergii":
                user.Alergii.Remove(istoricMedical);
                break;

            case "cardio":
                user.ConsulatiiCardio.Remove(istoricMedical);
                break;
        }

        await _userCollection.ReplaceOneAsync(x => x.Id == id, user);
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
