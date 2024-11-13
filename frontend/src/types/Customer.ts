import { Status } from "./Status";

export type Customer = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: Status;
};
