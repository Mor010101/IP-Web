using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace IP_Web.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    [Required] public string Nume { get; set; } = string.Empty;
    [Required] public string Prenume { get; set; } = string.Empty;
    [Required] public string Cnp { get; set; } = string.Empty;
    public int Varsta { get; set; }
    [Required] public string Telefon { get; set; } = string.Empty;
    [Required] public string Email { get; set; } = string.Empty;
    [Required] public string Password { get; set; } =string.Empty;
    public byte[] Salt { get; set; }
    public string Profesie { get; set; } = string.Empty;
    public string LocDeMunca { get; set; } = string.Empty;
    public string Oras { get; set; } = string.Empty;
    public string Strada { get; set; } = string.Empty;
    public int NrStrada { get; set; }
    public int CodPostal { get; set; }  
    public string Alergii { get; set; } = string.Empty;
    public string IstoricMedical { get; set; } = string.Empty;
    public string ConsulatiiCardio { get; set; } = string.Empty;

    public string? IdAdmin { get; set; }

}
