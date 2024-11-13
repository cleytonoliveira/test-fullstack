import { FiUser } from "react-icons/fi";
import { Button } from "./Button";
import { useLocation } from "react-router-dom";

type SubtitleProps = {
  title: string;
  text: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ title, text }) => {
  const { pathname } = useLocation();
  return (
    <section>
      <div className="flex flex-row mt-32 sm:mt-10 border-b-2 pb-6">
        <FiUser size={40} />
        <h2 className="text-3xl ml-6">Painel de clientes</h2>
      </div>
      <article className="my-6 flex justify-between">
        <div>
          <h3 className="text-xl mb-3 font-medium text-gray-500">{title}</h3>
          <p className="text-gray-500 font-light">{text}</p>
        </div>
        {pathname === "/clientes" && (
          <Button
            title={"Novo cliente"}
            path={"/clientes/novo"}
            style={
              "bg-koji-orange text-white w-32 h-10 rounded-lg mr-10 sm:mr-0"
            }
          />
        )}
      </article>
    </section>
  );
};
