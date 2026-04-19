using Microsoft.EntityFrameworkCore;

namespace Persistance;

public class AppDbContext (DbContextOptions options) : DbContext (options)
{
    public required DbSet<Domain.Activity> Activities { get; set; }
}
