using System.ComponentModel.DataAnnotations;

namespace AlcottBackend.ClientData;


public class ClientEmployee
{
    [Required]
    public string? Name { get; set; }
    [Required]
    public string? Password { get; set; }
    [Required]
    public int Role { get; set; }
}