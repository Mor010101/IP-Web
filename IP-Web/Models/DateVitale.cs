using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace IP_Web.Models;

public class DateVitale
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public DateTime time_stamp { get; set; }
    public int temperatura { get; set; }
    public int puls { get; set; }
    public int ecg { get; set; }
}
