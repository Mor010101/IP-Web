using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

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
        await _userCollection.InsertOneAsync(user);
    }
    public async Task UpdateAsync(string id, UserDTO userDTO)
    {
        var user = _mapper.Map<User>(userDTO);
        user.Id = id;

        await _userCollection.ReplaceOneAsync(x => x.Id == id, user);
    }
    public async Task RemoveAsync(string id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);

    public async Task<List<User>> GetAllForAdminAsync(string id) =>
    await _userCollection.Find(x => x.idAdmin == id).ToListAsync();

}
