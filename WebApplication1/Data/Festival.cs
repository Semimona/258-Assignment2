namespace WebApplication1.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Festival")]
    public partial class Festival
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string Title { get; set; }

        [StringLength(150)]
        public string Img { get; set; }
    }
}
