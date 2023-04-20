using IP_Web.Models;

namespace IP_Web.DTOs;

public class AlertaDTO
{
    public string mesaj { get; set; }

    public DateTime time_stamp { get; set; }

    public bool is_active { get; set; }
}
