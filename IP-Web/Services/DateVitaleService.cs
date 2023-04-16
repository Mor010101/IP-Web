using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace IP_Web.Services;

public class DateVitaleService
{
    private readonly IMongoCollection<DateVitale> _dateVitaleCollection;
    private readonly IMapper _mapper;

    public DateVitaleService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _dateVitaleCollection = mongoDatabase.GetCollection<DateVitale>(
            careBandDbSettings.Value.DateVitaleCollectionName);
        _mapper = mapper;
    }

    public async Task<List<DateVitale>> GetAsync() =>
        await _dateVitaleCollection.Find(_ => true).ToListAsync();
    public async Task<DateVitale?> GetByIdAsync(string id) =>
        await _dateVitaleCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(DateVitaleDTO dateVitaleDTO)
    {
        var dateVitale = _mapper.Map<DateVitale>(dateVitaleDTO);
        await _dateVitaleCollection.InsertOneAsync(dateVitale);
    }
    public async Task UpdateAsync(string id, DateVitaleDTO dateVitaleDTO)
    {
        var dateVitale = _mapper.Map<DateVitale>(dateVitaleDTO);
        dateVitale.Id = id;

        await _dateVitaleCollection.ReplaceOneAsync(x => x.Id == id, dateVitale);
    }
    public async Task RemoveAsync(string id) =>
        await _dateVitaleCollection.DeleteOneAsync(x => x.Id == id);
}
