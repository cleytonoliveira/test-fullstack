import Header from "../components/Header";
import { Subtitle } from "../components";
import { CustomerProvider } from "../context/CustomerProvider";
import { CustomerForm } from "../components/CustomerForm";

export default function EditClientForm() {
  return (
    <CustomerProvider>
      <main>
        <Header />
        <Subtitle
          title={"Editar usuário"}
          text={"Altere os campos a seguir para editar o usuário:"}
        />
        <CustomerForm />
      </main>
    </CustomerProvider>
  );
}
