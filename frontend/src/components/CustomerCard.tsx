import { Button } from "../components";
import { Status } from "../types/Status";

type CustomerCardProps = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: Status;
};

export const CustomerCard: React.FC<CustomerCardProps> = ({
  id,
  name,
  email,
  cpf,
  phone,
  status,
}) => {
  const statusColor: Record<Status, string> = {
    Ativo: "bg-green-500",
    Inativo: "bg-red-500",
    "Aguardando ativação": "bg-yellow-500",
    Desativado: "bg-gray-300",
  };
  return (
    <article className="flex flex-wrap border-2 py-6 sm:py-3 px-10 sm:px-3 items-center justify-between sm:justify-around break-words">
      <div className="w-[25%] sm:w-[39%]">
        <h4 className="font-medium text-gray-500">{name}</h4>
        <p className="text-gray-500 font-light">{email}</p>
      </div>
      <div className="w-[25%] sm:w-[39%]">
        <p className="font-medium text-gray-500">{cpf}</p>
        <p className="text-gray-500 font-light">{phone}</p>
      </div>
      <span className="flex flex-row w-[25%] sm:w-[22%] flex-wrap sm:justify-center">
        <div className={`rounded-full ${statusColor[status]} h-5 w-5 mr-2`} />
        <p className="text-gray-500 font-light">{status}</p>
      </span>
      <Button
        title={"Editar"}
        path={`/clientes/editar/${id}`}
        style={
          "text-koji-orange border-2 border-koji-orange w-32 h-10 rounded-md hover:bg-koji-orange hover:text-white"
        }
      />
    </article>
  );
};
