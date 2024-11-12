import api from "./axiosConfig";
import { Customer } from "../types/Customer";

export const getCustomers = async () => {
  try {
    const response = await api.get("/customers");
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os clientes", error);
    throw error;
  }
};

export const createCustomer = async (customer: Omit<Customer, "id">) => {
  try {
    const response = await api.post("/customers", customer);
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    throw error;
  }
};
