import { useEffect, useState } from "react";

import { getCustomers } from "../services/customerService";
import { CustomerCard } from "./CustomerCard";

type Customer = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
};

export const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Erro ao buscar os clientes", error);
      }
    };
    fetchCustomers();
  }, []);

  return customers.map((customer: Customer) => (
    <>
      <CustomerCard
        key={customer.id}
        id={customer.id}
        name={customer.name}
        email={customer.email}
        cpf={customer.cpf}
        phone={customer.phone}
        status={customer.status}
      />
      <p>
        Exibindo{" "}
        {customers.length === 1
          ? `${customers.length} cliente`
          : `${customers.length} clientes`}
      </p>
    </>
  ));
};
