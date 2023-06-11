using IP_Web.BsonMaps;
using IP_Web.Models;
using IP_Web.Models.AutoMapper;
using IP_Web.Services;
using MongoDB.Bson.Serialization;
using AutoMapper;
using IP_Web.Extensions;
using MQTTnet.Extensions.ManagedClient;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Server;
using MongoDB.Bson;

var builder = WebApplication.CreateBuilder(args);

var mqttFactory = new MqttFactory();

var mqttClient = mqttFactory.CreateMqttClient();

var options = new MqttClientOptionsBuilder().WithTcpServer("test.mosquitto.org", 1883).WithClientId("careband_consumer").Build();


mqttClient.ApplicationMessageReceivedAsync += e =>
{
    Console.WriteLine("Received application message.");
    Console.WriteLine(e.ApplicationMessage.ConvertPayloadToString());

    return Task.CompletedTask;
};


var response = await mqttClient.ConnectAsync(options, CancellationToken.None);

Console.Write("CONNECTION: ");
Console.WriteLine(response.ToString());

var mqttSubscribeOptions = mqttFactory.CreateSubscribeOptionsBuilder()
    .WithTopicFilter(
        f =>
        {
            f.WithTopic("EKG4245");
        })
    .Build();

var subscribeResult = await mqttClient.SubscribeAsync(mqttSubscribeOptions, CancellationToken.None);

Console.Write("MQTT client subscribed to topic. ");
Console.WriteLine(subscribeResult.ToString());

await mqttClient.PingAsync(CancellationToken.None);



//add authorization
builder.Services.AddJWTTokenServices(builder.Configuration);

// Add services to the container.
builder.Services.Configure<CareBandDbSettings>(
    builder.Configuration.GetSection("CareBandDb"));
builder.Services.AddSingleton<LimitParamService>();
builder.Services.AddSingleton<DateVitaleService>();
builder.Services.AddSingleton<AlertaService>();
builder.Services.AddSingleton<AdminService>();
builder.Services.AddSingleton<TestService>();
builder.Services.AddSingleton<RecomandareService>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<AuthService>();


//define automapper config
var mapperConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new AutoMapperProfile());
});
IMapper mapper = mapperConfig.CreateMapper();

builder.Services.AddSingleton(mapper);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options => {
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."
    });
    options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme {
                    Reference = new Microsoft.OpenApi.Models.OpenApiReference {
                        Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                            Id = "Bearer"
                    }
                },
                new string[] {}
        }
    });
});

//specify CORS policy
builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
            policy.AllowAnyOrigin();
        });
});



// Add Bson to class mapping
BsonClassMap.RegisterClassMap<TestMap>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.Run();
