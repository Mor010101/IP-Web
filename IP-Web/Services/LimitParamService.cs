using AutoMapper;
using IP_Web.DTOs;
using IP_Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson.IO;
using MongoDB.Driver;

namespace IP_Web.Services;

public class LimitParamService
{
    private readonly IMongoCollection<LimitParam> _limitParamCollection;
    private readonly IMapper _mapper;
    public LimitParamService(
        IOptions<CareBandDbSettings> careBandDbSettings,
        IMapper mapper)
    {
        var mongoClient = new MongoClient(
            careBandDbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            careBandDbSettings.Value.DatabaseName );
        _limitParamCollection = mongoDatabase.GetCollection<LimitParam>(
            careBandDbSettings.Value.LimitParamCollectionName );
        _mapper = mapper;
    }

    public async Task<List<LimitParam>> GetAsync() =>
        await _limitParamCollection.Find(_ => true).ToListAsync();
    public async Task<LimitParam?> GetByIdAsync(string id) =>
        await _limitParamCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(LimitParamDTO limitParamDTO)
    {
        var limitParam = _mapper.Map<LimitParam>(limitParamDTO);
        await _limitParamCollection.InsertOneAsync(limitParam);
    }
    public async Task UpdateAsync(string id, LimitParamDTO limitParamDTO)
    {
        var limitParam = _mapper.Map<LimitParam>(limitParamDTO);
        limitParam.Id = id;

        await _limitParamCollection.ReplaceOneAsync(x => x.Id == id, limitParam);
    }
    public async Task RemoveAsync(string id) => 
        await _limitParamCollection.DeleteOneAsync(x => x.Id == id);

    public async Task<List<LimitParam>> GetAllForAlertaAsync(string id)=>
        await _limitParamCollection.Find(x=> x.idAlerta == id).ToListAsync();    


}
