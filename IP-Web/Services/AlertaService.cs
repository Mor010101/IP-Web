using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson.IO;
using MongoDB.Driver;

namespace IP_Web.Services;

public class AlertaService
{
    private readonly IMongoCollection<Alerta> _alertaCollection;
    private readonly IMapper _mapper;

    public AlertaService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName);
        _alertaCollection = mongoDatabase.GetCollection<Alerta>(
            careBandDbSettings.Value.AlertaCollectionName);
        _mapper = mapper;
    }

    public async Task<List<Alerta>> GetAsync() =>
        await _alertaCollection.Find(_ => true).ToListAsync();
    public async Task<Alerta?> GetByIdAsync(string id) => 
        await _alertaCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(AlertaDTO alertaDTO)
    {
        var alerta = _mapper.Map<Alerta>(alertaDTO);    
        await _alertaCollection.InsertOneAsync(alerta);
    }
    public async Task UpdateAsync(string id, AlertaDTO alertaDTO)
    {
        var alerta = _mapper.Map<Alerta>(alertaDTO);
        alerta.Id = id;

        await _alertaCollection.ReplaceOneAsync(x => x.Id == id, alerta);
    }
    public async Task RemoveAsync(string id) =>
        await _alertaCollection.DeleteOneAsync(x => x.Id == id);
}
