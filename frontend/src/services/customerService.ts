import api from "./axiosConfig";

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
