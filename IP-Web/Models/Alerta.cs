using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IP_Web.Models;

public class Alerta
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }

    public string mesaj { get; set; }

    public DateTime time_stamp { get; set; }

    public bool is_active { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public List<string?> IdLimitParam { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? idPacient { get; set; }
}
