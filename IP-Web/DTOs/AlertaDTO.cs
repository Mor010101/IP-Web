using IP_Web.Models;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace IP_Web.DTOs;

public class AlertaDTO
{
    public string mesaj { get; set; }

    public DateTime time_stamp { get; set; }

    public bool is_active { get; set; }


    [BsonRepresentation(BsonType.ObjectId)]
    public List<string?> IdLimitParam { get; set; }

    public string? idPacient { get; set; }
}
