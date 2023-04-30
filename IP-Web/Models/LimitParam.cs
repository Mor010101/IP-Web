using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IP_Web.Models;

public class LimitParam
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string ?Id { get; set; }
    //if name is different from MongoDB, should annotate with [BsonElement("Name")]
    public int bpmLimit { get; set; }
    public int tempLimit { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string ?idAlerta { get; set; }


}
