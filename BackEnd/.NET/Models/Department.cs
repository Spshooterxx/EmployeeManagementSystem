using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EmployeeApi.Models
{
    [Table("departments")]
    public class Department
    {
        [Key]
        [Column("id")]
        public long Id { get; set; }

        [Column("name")]
        public string? Name { get; set; }

        [Column("location")]
        public string? Location { get; set; }

        [JsonIgnore]
        public ICollection<Employee>? Employees { get; set; }
    }
}
