using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIWeb.Models
{
    public class WebUser : IdentityUser 
    {
        [Required]
        [MaxLength(99)]
        public string FirstName { get; set; }

        [MaxLength(99)]
        public string? LastName { get; set; }

        [MaxLength(99)]
        public string? Address { get; set; }
    }
}
