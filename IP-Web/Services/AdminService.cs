using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace IP_Web.Services;

public class AdminService
{
    private readonly IMongoCollection<Admin> _adminCollection;
    private readonly IMapper _mapper;

    public AdminService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _adminCollection = mongoDatabase.GetCollection<Admin>(
            careBandDbSettings.Value.AdminCollectionName);
        _mapper = mapper;
    }

    public async Task<List<Admin>> GetAsync() =>
        await _adminCollection.Find(_ => true).ToListAsync();
    public async Task<Admin?> GetByIdAsync(string id) =>
        await _adminCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(AdminDTO adminDTO)
    {
        var admin = _mapper.Map<Admin>(adminDTO);
        await _adminCollection.InsertOneAsync(admin);
    }
    public async Task UpdateAsync(string id, AdminDTO adminDTO)
    {
        var admin = _mapper.Map<Admin>(adminDTO);
        admin.Id = id;

        await _adminCollection.ReplaceOneAsync(x => x.Id == id, admin);
    }
    public async Task RemoveAsync(string id) =>
        await _adminCollection.DeleteOneAsync(x => x.Id == id);
}
