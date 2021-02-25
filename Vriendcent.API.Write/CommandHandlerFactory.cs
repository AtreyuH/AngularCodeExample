using Autofac;
using Vriendcent.API.Write.Interfaces;
using Vriendcent.CQRS;

namespace Vriendcent.API.Write
{
    public class CommandHandlerFactory : ICommandHandlerFactory
    {
        private readonly ILifetimeScope lifetimeScope;

        public CommandHandlerFactory(ILifetimeScope lifetimeScope)
        {
            this.lifetimeScope = lifetimeScope;
        }

        public ICommandHandler<TCommand> Resolve<TCommand>()
            where TCommand : Command
        {
            return lifetimeScope.Resolve<ICommandHandler<TCommand>>();
        }
    }
}
