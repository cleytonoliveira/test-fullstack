import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { useCustomerContext } from "../context/CustomerContext";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
} from "../services/customerService";
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
    setCustomerData,
    handleNameChange,
    handleEmailChange,
    handleCpfChange,
    handlePhoneChange,
    handleStatusChange,
  } = useCustomerContext();

  const navigate = useNavigate();
  const { customerId } = useParams();
  const options = ["Ativo", "Inativo", "Aguardando ativação", "Desativado"];

  async function handleCustomerSubmit() {
    try {
      if (customerId) {
        const data = await updateCustomer(customerId, {
          name,
          email,
          cpf,
          phone,
          status,
        });
        if (data) {
          navigate("/clientes", { state: { shouldUpdate: true } });
        }
      } else {
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
      }
    } catch (error) {
      console.error("Erro ao salvar o cliente", error);
    }
  }

  useEffect(() => {
    async function fetchCustomerData() {
      if (customerId) {
        try {
          const { data: customerData } = await getCustomerById(customerId);
          if (customerData) {
            setCustomerData(customerData);
          }
        } catch (error) {
          console.error("Erro ao buscar dados do cliente", error);
        }
      }
    }
    fetchCustomerData();
  }, [customerId]);

  return (
    <form className="pt-6">
      <Input
        defaultValue={name}
        type={"text"}
        placeholder={"Nome"}
        handleChange={handleNameChange}
      />
      <Input
        defaultValue={email}
        type={"email"}
        placeholder={"E-mail"}
        handleChange={handleEmailChange}
      />
      <Input
        defaultValue={cpf}
        type={"text"}
        placeholder={"CPF"}
        handleChange={handleCpfChange}
      />
      <Input
        defaultValue={phone}
        type={"text"}
        placeholder={"Telefone"}
        handleChange={handlePhoneChange}
      />
      <Select
        defaultValue={status}
        options={options}
        handleChange={handleStatusChange}
      />
      <div className="mt-16 space-x-4">
        <Button
          title={customerId ? "Editar" : "Criar"}
          path={"/clientes"}
          onClick={handleCustomerSubmit}
          style="bg-koji-orange text-white w-32 h-10 rounded-lg"
        />
        <Button
          title={"Voltar"}
          path={"/clientes"}
          style={
            "text-koji-orange border-2 border-koji-orange w-32 h-10 rounded-lg hover:bg-koji-orange hover:text-white"
          }
        />
      </div>
    </form>
  );
};
