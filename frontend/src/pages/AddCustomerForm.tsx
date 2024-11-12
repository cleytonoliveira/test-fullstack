import Header from "../components/Header";
import { CustomerProvider } from "../context/CustomerContext";
import { CustomerForm } from "../components/CustomerForm";
import { Subtitle } from "../components";

export default function AddCustomerForm() {
  return (
    <CustomerProvider>
      <main>
        <Header />
        <Subtitle
          title={"Novo usuário"}
          text={"Informe os campos a seguir para criar novo usuário:"}
        />
        <CustomerForm />
      </main>
    </CustomerProvider>
  );
}
