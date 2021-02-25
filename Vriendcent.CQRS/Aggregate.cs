using System;

namespace Vriendcent.CQRS
{
    public class Aggregate : IAggregate
    {
        public Guid Id { get; set; }
        public bool IsDeleted { get; set; }

        protected Aggregate()
        {
            Id = Guid.NewGuid();
            IsDeleted = false;
        }
    }
}
