using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IP_Web.Models;

public class Admin
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }

    public string nume { get; set; }

    public string prenume { get; set; }

    public string cnp { get; set; }

    public string? idPacienti { get; set; }
}
