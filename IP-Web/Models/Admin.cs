using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace IP_Web.Models;

public class Admin
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }
    [Required]
    public string Email { get; set; } = string.Empty;

    public string Nume { get; set; } = string.Empty;

    public string Prenume { get; set; } = string.Empty;

    public string Cnp { get; set; } = string.Empty;

    public string? IdPacienti { get; set; }
}
