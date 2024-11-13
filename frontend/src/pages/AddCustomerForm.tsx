import Header from "../components/Header";
import { CustomerProvider } from "../context/CustomerProvider";
import { CustomerForm } from "../components/CustomerForm";
import { Subtitle } from "../components";

export default function AddCustomerForm() {
  return (
    <CustomerProvider>
      <Header />
      <main className="px-56 sm:px-5">
        <Subtitle
          title={"Novo usuário"}
          text={"Informe os campos a seguir para criar novo usuário:"}
        />
        <CustomerForm />
      </main>
    </CustomerProvider>
  );
}
