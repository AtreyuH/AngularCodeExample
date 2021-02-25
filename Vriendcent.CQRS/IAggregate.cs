using System;

namespace Vriendcent.CQRS
{
    public interface IAggregate
    {
        Guid Id { get; set; }
        bool IsDeleted { get; set; }
    }
}