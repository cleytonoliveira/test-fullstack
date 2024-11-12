import Header from "../components/Header";
import { Button, Subtitle, CustomerList } from "../components";

export default function Home() {
  return (
    <main>
      <Header />
      <Subtitle
        title={"Listagem de usuários"}
        text={"Escolha um cliente para visualizar os detalhes"}
      />
      <Button title={"Novo cliente"} path={"/clientes/novo"} />
      <CustomerList />
    </main>
  );
}
