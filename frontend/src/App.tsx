import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import AddCustomerForm from "./pages/AddCustomerForm";
import EditClientForm from "./pages/EditClientForm";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/clientes" replace />,
  },
  {
    path: "/clientes",
    element: <Home />,
  },
  {
    path: "/clientes/novo",
    element: <AddCustomerForm />,
  },
  {
    path: "/clientes/editar/:customerId",
    element: <EditClientForm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
