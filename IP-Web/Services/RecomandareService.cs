using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace IP_Web.Services;

public class RecomandareService
{
    private readonly IMongoCollection<Recomandare> _recomandareCollection;
    private readonly IMapper _mapper;
    public RecomandareService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)
      
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _recomandareCollection = mongoDatabase.GetCollection<Recomandare>(
            careBandDbSettings.Value.RecomandareCollectionName);
        _mapper = mapper;
    }

    public async Task<List<Recomandare>> GetAsync() =>
       await _recomandareCollection.Find(_ => true).ToListAsync();
    public async Task<Recomandare?> GetByIdAsync(string id) =>
        await _recomandareCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
   public async Task CreateAsync(RecomandareDTO recomandareDTO)
    {
        var recomandare = _mapper.Map<Recomandare>(recomandareDTO);
        await _recomandareCollection.InsertOneAsync(recomandare);
    }
    public async Task UpdateAsync(string id,  RecomandareDTO recomandareDTO)
    {
        var recomandare = _mapper.Map<Recomandare>(recomandareDTO);
        recomandare.Id = id;

        await _recomandareCollection.ReplaceOneAsync(x => x.Id == id, recomandare);
    }
    public async Task RemoveAsync(string id) =>
        await _recomandareCollection.DeleteOneAsync(x => x.Id == id);
}
