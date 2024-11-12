import { createContext, ReactNode, useContext, useState } from "react";

type CustomerContextProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCpfChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const CustomerContext = createContext<CustomerContextProps>({
  name: "",
  email: "",
  cpf: "",
  phone: "",
  status: "",
  handleNameChange: () => {},
  handleEmailChange: () => {},
  handleCpfChange: () => {},
  handlePhoneChange: () => {},
  handleStatusChange: () => {},
});

export const useCustomerContext = () => useContext(CustomerContext);

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({
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

  return (
    <CustomerContext.Provider
      value={{
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
