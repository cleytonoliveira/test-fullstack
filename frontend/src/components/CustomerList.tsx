import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getCustomers } from "../services/customerService";
import { CustomerCard } from "./CustomerCard";
import { Customer } from "../types/Customer";

export const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState([]);
  const location = useLocation();

  function getCustomersText() {
    const text = {
      singular: "cliente",
      plural: "clientes",
      zero: "nenhum cliente",
    };

    if (customers.length === 0) {
      return text.zero;
    } else if (customers.length === 1) {
      return `${customers.length} ${text.singular}`;
    } else {
      return `${customers.length} ${text.plural}`;
    }
  }

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Erro ao buscar os clientes", error);
      }
    };

    if (!customers.length || location.state?.shouldUpdate) {
      fetchCustomers();
    }
  }, [location.state, customers.length]);

  return (
    <section className="space-y-6">
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
      <p className="text-gray-500 font-light pb-5">
        Exibindo {getCustomersText()}.
      </p>
    </section>
  );
};
