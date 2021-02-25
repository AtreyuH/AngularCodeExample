using Vriendcent.CQRS;

namespace Vriendcent.API.Write.Interfaces
{
    public interface ICommandHandlerFactory
    {
        ICommandHandler<TCommand> Resolve<TCommand>() where TCommand : Command;
    }
}
