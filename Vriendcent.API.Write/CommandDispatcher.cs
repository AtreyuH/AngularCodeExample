using System.Threading.Tasks;
using Vriendcent.API.Write.Interfaces;
using Vriendcent.CQRS;

namespace Vriendcent.API.Write
{
    public class CommandDispatcher : ICommandDispatcher
    {
        private readonly ICommandHandlerFactory _commandHandlerFactory;
        public CommandDispatcher(ICommandHandlerFactory commandHandlerFactory)
        {
            _commandHandlerFactory = commandHandlerFactory;
        }

        public Task Dispatch<TCommand>(TCommand command)
            where TCommand : Command
        {
            var commandHandler = _commandHandlerFactory.Resolve<TCommand>();

            return commandHandler.HandleAsync(command);
        }
    }
}
