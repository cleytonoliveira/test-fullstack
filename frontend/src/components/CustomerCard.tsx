import { Button } from "../components";

type CustomerCardProps = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
};

export const CustomerCard: React.FC<CustomerCardProps> = ({
  id,
  name,
  email,
  cpf,
  phone,
  status,
}) => {
  return (
    <section>
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <div>
        <p>{cpf}</p>
        <p>{phone}</p>
      </div>
      <p>{status}</p>
      <Button title={"Editar"} path={`/clientes/editar/${id}`} />
    </section>
  );
};
