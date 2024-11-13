import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [errorMessage, setErrorMessage] = useState<FieldsError>({});
  const { customerId } = useParams();
  const options = ["Ativo", "Inativo", "Aguardando ativação", "Desativado"];

  type FieldsError = {
    errorName?: string;
    errorEmail?: string;
    errorCpf?: string;
    errorPhone?: string;
    errorStatus?: string;
    errorFetch?: string;
  };

  function validateFields(): boolean {
    const fieldsError: FieldsError = {};
    if (!name) {
      fieldsError.errorName = "Campo nome é obrigatório";
    }
    if (!email) {
      fieldsError.errorEmail = "Campo e-mail é obrigatório";
    }
    if (!cpf) {
      fieldsError.errorCpf = "Campo CPF é obrigatório";
    }
    if (!phone) {
      fieldsError.errorPhone = "Campo telefone é obrigatório";
    }
    if (!status) {
      fieldsError.errorStatus = "Campo status é obrigatório";
    }
    setErrorMessage(fieldsError);
    return Object.keys(fieldsError).length === 0;
  }

  async function handleCustomerSubmit(event: React.FormEvent) {
    event.preventDefault();
    const isValid = validateFields();
    if (isValid) {
      if (customerId) {
        try {
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
        } catch (error) {
          console.error("Erro ao editar o cliente", error);
          setErrorMessage({
            errorFetch: "Erro ao editar o cliente! Confira os dados novamente!",
          });
        }
      } else {
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
        } catch (error) {
          console.error("Erro ao salvar o cliente", error);
          setErrorMessage({
            errorFetch: "Erro ao salvar o cliente! Confira os dados novamente!",
          });
        }
      }
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
    <form className="pt-6 space-y-6">
      <div className="relative">
        <Input
          defaultValue={name}
          type={"text"}
          placeholder={"Nome"}
          handleChange={handleNameChange}
        />
        {errorMessage.errorName && (
          <p className="text-red-500 text-xs italic absolute mt-1">
            {errorMessage.errorName}
          </p>
        )}
      </div>
      <div className="relative">
        <Input
          defaultValue={email}
          type={"email"}
          placeholder={"E-mail"}
          handleChange={handleEmailChange}
        />
        {errorMessage.errorEmail && (
          <p className="text-red-500 text-xs italic absolute mt-1">
            {errorMessage.errorEmail}
          </p>
        )}
      </div>
      <div className="relative">
        <Input
          defaultValue={cpf}
          type={"text"}
          placeholder={"CPF"}
          handleChange={handleCpfChange}
        />
        {errorMessage.errorCpf && (
          <p className="text-red-500 text-xs italic absolute mt-1">
            {errorMessage.errorCpf}
          </p>
        )}
      </div>
      <div className="relative">
        <Input
          defaultValue={phone}
          type={"text"}
          placeholder={"Telefone"}
          handleChange={handlePhoneChange}
        />
        {errorMessage.errorPhone && (
          <p className="text-red-500 text-xs italic absolute mt-1">
            {errorMessage.errorPhone}
          </p>
        )}
      </div>
      <div className="relative">
        <Select
          defaultValue={status}
          options={options}
          handleChange={handleStatusChange}
        />
        {errorMessage.errorStatus && (
          <p className="text-red-500 text-xs italic absolute mt-1">
            {errorMessage.errorStatus}
          </p>
        )}
        {errorMessage.errorFetch && (
          <p className="text-red-500 text-xs italic absolute mt-6">
            {errorMessage.errorFetch}
          </p>
        )}
      </div>
      <div className="pt-8 space-x-4">
        <Button
          title={customerId ? "Editar" : "Criar"}
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
