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
    <article className="flex border-2 py-6 sm:py-3 px-10 sm:px-6 justify-between">
      <div className="w-[25%]">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <div className="w-[25%]">
        <p>{cpf}</p>
        <p>{phone}</p>
      </div>
      <span className="flex flex-row w-[25%]">
        <div className={`rounded-full ${statusColor[status]} h-5 w-5 mr-2`} />
        <p>{status}</p>
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
