import { useNavigate } from "react-router-dom";

import { useCustomerContext } from "../context/CustomerContext";
import { createCustomer } from "../services/customerService";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";

export const CustomerForm = () => {
  const {
    name,
    email,
    cpf,
    phone,
    status,
    handleNameChange,
    handleEmailChange,
    handleCpfChange,
    handlePhoneChange,
    handleStatusChange,
  } = useCustomerContext();
  const navigate = useNavigate();
  const options = ["Ativo", "Inativo", "Aguardando ativação", "Desativado"];

  const fetchCreateCustomer = async () => {
    try {
      const data = await createCustomer({
        name,
        email,
        cpf,
        phone,
        status,
      });
      if (data) {
        navigate("/clientes", { state: { shouldUpdate: true } });
      }
      console.log(data.message);
    } catch (error) {
      console.error("Erro ao criar o cliente", error);
    }
  };

  return (
    <form>
      <Input
        type={"text"}
        placeholder={"Nome"}
        handleChange={handleNameChange}
      />
      <Input
        type={"email"}
        placeholder={"E-mail"}
        handleChange={handleEmailChange}
      />
      <Input type={"text"} placeholder={"CPF"} handleChange={handleCpfChange} />
      <Input
        type={"text"}
        placeholder={"Telefone"}
        handleChange={handlePhoneChange}
      />
      <Select
        id={"teste"}
        options={options}
        handleChange={handleStatusChange}
      />
      <Button
        title={"Criar"}
        path={"/clientes"}
        onClick={fetchCreateCustomer}
      />
      <Button title={"Voltar"} path={"/clientes"} />
    </form>
  );
};
