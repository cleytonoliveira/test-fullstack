import Header from "../components/Header";
import { Subtitle, CustomerList } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-56 sm:px-5">
        <Subtitle
          title={"Listagem de usuários"}
          text={"Escolha um cliente para visualizar os detalhes"}
        />
        <CustomerList />
      </main>
    </>
  );
}
