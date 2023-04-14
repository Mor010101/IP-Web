using IP_Web.Models;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace IP_Web.BsonMaps;

public class TestMap : BsonClassMap<Test>
{
    public TestMap() 
    {
        AutoMap();  //automap other properties
        MapProperty(x => x.StartTime).SetSerializer(new DateTimeSerializer(DateTimeKind.Utc)); //specify mapping for DateTime property
    }
}


