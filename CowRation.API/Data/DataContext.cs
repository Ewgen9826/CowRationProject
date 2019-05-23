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
        public DbSet<CatalogIndexFood> CatalogIndexFoods { get; set; }
        public DbSet<CharacterizationIndexFood> CharacterizationIndexFoods { get; set; }
        public DbSet<Storage> Storages { get; set; }
        public DbSet<RationResult> RationResults { get; set; }
        public DbSet<Ration> Rations { get; set; }
        public DbSet<LaboratoryIndexFood> LaboratoryIndexFoods { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<KormUser>()
                 .HasKey(t => new { t.KormId, t.UserId });

            modelBuilder.Entity<KormUser>()
                .HasOne(ku => ku.User)
                .WithMany(u => u.KormUsers)
                .HasForeignKey(ku => ku.UserId);

            modelBuilder.Entity<KormUser>()
                .HasOne(ku => ku.Korm)
                .WithMany(k => k.KormUsers)
                .HasForeignKey(ku => ku.KormId);

            modelBuilder.Entity<KormStorage>()
                 .HasKey(t => new { t.KormId, t.StorageId });
            
            modelBuilder.Entity<KormStorage>()
                .HasOne(ku => ku.Storage)
                .WithMany(u => u.KormStorages)
                .HasForeignKey(ku => ku.StorageId);
            modelBuilder.Entity<KormStorage>()
                .HasOne(ku => ku.Korm)
                .WithMany(k => k.KormStorages)
                .HasForeignKey(ku => ku.KormId);
        }
    }
}