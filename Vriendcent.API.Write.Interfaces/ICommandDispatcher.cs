using System.Threading.Tasks;
using Vriendcent.CQRS;

namespace Vriendcent.API.Write.Interfaces
{
    public interface ICommandDispatcher
    {
        Task Dispatch<TCommand>(TCommand command) where TCommand : Command;
    }

}
