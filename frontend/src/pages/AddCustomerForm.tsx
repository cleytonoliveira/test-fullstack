import Header from "../components/Header";
import { Button, Input, Select, Subtitle } from "../components";

export default function AddCustomerForm() {
  const options = ["Ativo", "Inativo", "Aguardando ativação", "Desativado"];

  return (
    <main>
      <Header />
      <Subtitle
        title={"Novo usuário"}
        text={"Informe os campos a seguir para criar novo usuário:"}
      />
      <form>
        <Input type={"text"} placeholder={"Nome"} />
        <Input type={"email"} placeholder={"E-mail"} />
        <Input type={"text"} placeholder={"CPF"} />
        <Input type={"text"} placeholder={"Telefone"} />
        <Select id={"teste"} options={options} />
        <Button title={"Criar"} path={"/"} />
        <Button title={"Voltar"} path={"/clientes"} />
      </form>
    </main>
  );
}
