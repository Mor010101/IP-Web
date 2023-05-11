namespace IP_Web.Models;

public class UserTokens
{
    public string Token { get; set; } = string.Empty;
    public TimeSpan Validity { get; set; }
    public string RefreshToken { get; set; } = string.Empty;
    public Guid GuidId { get; set; }
    public string UserId { get; set; } = string.Empty;
    public string UserEmail { get; set; } = string.Empty;
    public DateTime ExpiredTime { get; set; }
    
}
