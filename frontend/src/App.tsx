import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCustomerForm from "./pages/AddCustomerForm";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clientes",
    element: <Home />,
  },
  {
    path: "/clientes/novo",
    element: <AddCustomerForm />,
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
