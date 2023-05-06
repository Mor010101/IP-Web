using IP_Web.BsonMaps;
using IP_Web.Models;
using IP_Web.Models.AutoMapper;
using IP_Web.Services;
using MongoDB.Bson.Serialization;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

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
builder.Services.AddSwaggerGen();

//specify CORS policy
builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin();    //this should never ever be done in a prod branch
            policy.AllowAnyMethod();
            policy.AllowAnyHeader();
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

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.Run();
