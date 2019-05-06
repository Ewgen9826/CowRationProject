using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Korm> Korms { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<KormUser>()
                 .HasKey(t => new { t.KormId, t.UserId });
            modelBuilder.Entity<KormUser>()
                .HasOne(ku => ku.User)
                .WithMany(u => u.Korms)
                .HasForeignKey(ku => ku.UserId);
            modelBuilder.Entity<KormUser>()
                .HasOne(ku => ku.Korm)
                .WithMany(k => k.Users)
                .HasForeignKey(ku => ku.KormId);
                
        }
    }
}