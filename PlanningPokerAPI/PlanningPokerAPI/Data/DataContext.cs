using Microsoft.EntityFrameworkCore;
using PlanningPokerAPI.Models;

namespace PlanningPokerAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options) 
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<GuestUser> GuestUsers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email).IsUnique();
            });
        }
    }
}
