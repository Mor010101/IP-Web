using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson.IO;
using MongoDB.Driver;

namespace IP_Web.Services;

public class LimitParamService
{
    private readonly IMongoCollection<LimitParam> _limitParamCollection;    
    public LimitParamService(
        IOptions<CareBandDbSettings> careBandDbSettings)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName );
        _limitParamCollection = mongoDatabase.GetCollection<LimitParam>(
            careBandDbSettings.Value.LimitParamCollectionName );
    }

    public async Task<List<LimitParam>> GetAsync() =>
        await _limitParamCollection.Find(_ => true).ToListAsync();
    public async Task<LimitParam?> GetByIdAsync(string id) =>
        await _limitParamCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(LimitParam limitParam) =>
        await _limitParamCollection.InsertOneAsync(limitParam);
    public async Task UpdateAsync(string id,  LimitParam limitParam) =>
        await _limitParamCollection.ReplaceOneAsync(x => x.Id == id, limitParam);
    public async Task RemoveAsync(string id) => 
        await _limitParamCollection.DeleteOneAsync(x => x.Id == id);
}
