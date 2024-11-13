import { createContext, useContext } from "react";
import { Status } from "../types/Status";

export type CustomerContextProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: Status;
  setCustomerData: (customerData: CustomerContextProps) => void;
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
  status: "Desativado",
  setCustomerData: () => {},
  handleNameChange: () => {},
  handleEmailChange: () => {},
  handleCpfChange: () => {},
  handlePhoneChange: () => {},
  handleStatusChange: () => {},
});

export const useCustomerContext = () => useContext(CustomerContext);
