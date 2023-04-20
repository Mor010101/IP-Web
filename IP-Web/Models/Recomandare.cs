using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Globalization;

namespace IP_Web.Models;

public class Recomandare
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string mesaj { get; set; }
    public DateTime start { get; set; }
    public DateTime end { get; set; }

}
