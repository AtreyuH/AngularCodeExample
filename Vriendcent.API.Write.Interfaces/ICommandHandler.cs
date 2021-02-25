using System.Threading.Tasks;

namespace Vriendcent.API.Write.Interfaces
{
    public interface ICommandHandler<TCommand>
    {
        Task HandleAsync(TCommand command);
    }
}
