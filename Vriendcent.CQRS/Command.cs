using System;

namespace Vriendcent.CQRS
{
    public abstract class Command
    {
        public Guid CommandId { get; set; }
        public DateTime ExecutedOn { get; set; }

        public string AppVersion { get; set; }
        public Guid? ExecutedById { get; set; }

        public Command()
        {
            ExecutedOn = DateTime.Now;
        }

        protected static TCommand Create<TCommand>()
            where TCommand : Command, new()
        {
            return new TCommand
            {
                CommandId = Guid.NewGuid(),
                ExecutedOn = DateTime.Now,
            };
        }
    }
}
