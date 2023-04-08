using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace IP_Web.Services;

public class TestService
{
    private readonly IMongoCollection<Test> _testCollection;
    public TestService(
        IOptions<CareBandDbSettings> careBandDbSettings)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _testCollection = mongoDatabase.GetCollection<Test>(
            careBandDbSettings.Value.TestCollectionName);
    }

    public async Task<List<Test>> GetAsync() => 
        await _testCollection.Find(_ => true).ToListAsync();
}
