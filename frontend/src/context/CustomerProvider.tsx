import { useState } from "react";
import { CustomerContext, CustomerContextProps } from "./CustomerContext";

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCpf(event.target.value);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(event.target.value);
  }

  function setCustomerData(customerData: CustomerContextProps) {
    setName(customerData.name);
    setEmail(customerData.email);
    setCpf(customerData.cpf);
    setPhone(customerData.phone);
    setStatus(customerData.status);
  }

  return (
    <CustomerContext.Provider
      value={{
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
