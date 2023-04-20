using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace IP_Web.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string nume { get; set; }
    public string prenume { get; set; }
    public string cnp { get; set; }
    public string nr_tel { get; set; }
    public string email { get; set; }
    public string profesie { get; set; }
    public string loc_de_munca{ get; set; }
    public string oras { get; set; }
    public string strada { get; set; }
    public int nr_strada { get; set; }
    public string alergii { get; set; }
    public string istoric_medical { get; set; }
    public string consultatii_cardio { get; set; }

    public string? idAdmin { get; set; }

}
