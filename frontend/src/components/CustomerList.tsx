import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getCustomers } from "../services/customerService";
import { CustomerCard } from "./CustomerCard";
import { Customer } from "../types/Customer";

export const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Erro ao buscar os clientes", error);
      }
    };

    if (location.state?.shouldUpdate) {
      fetchCustomers();
    }
  }, [location.state]);

  return (
    <>
      {customers.map((customer: Customer) => (
        <CustomerCard
          key={customer.id}
          id={customer.id}
          name={customer.name}
          email={customer.email}
          cpf={customer.cpf}
          phone={customer.phone}
          status={customer.status}
        />
      ))}
      <p>
        Exibindo{" "}
        {customers.length === 1
          ? `${customers.length} cliente`
          : `${customers.length} clientes`}
      </p>
    </>
  );
};
