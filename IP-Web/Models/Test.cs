using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;

namespace IP_Web.Models;

public class Test
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string ?Id { get; set; }
    public string ?Message { get; set; }
    [BsonElement("Start")]
    public DateTime StartTime { get; set; }
}
