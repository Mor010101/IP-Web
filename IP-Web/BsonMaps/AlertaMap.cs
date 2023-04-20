using IP_Web.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace IP_Web.BsonMaps;

public class AlertaMap : BsonClassMap<Alerta>
{
    public AlertaMap() 
    {
        AutoMap();
        
    }
}
