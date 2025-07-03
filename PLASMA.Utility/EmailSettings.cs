using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PLASMA.Utility
{
    public class EmailSettings
    {
        public required string SenderEmail { get; set; }
        public required string? AppPassword { get; set; }
    }
}
