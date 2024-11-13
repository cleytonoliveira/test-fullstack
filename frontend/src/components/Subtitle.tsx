import { FiUser } from "react-icons/fi";
import { Button } from "./Button";

type SubtitleProps = {
  title: string;
  text: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ title, text }) => {
  return (
    <section>
      <div className="flex flex-row pt-32 sm:pt-16 border-b-2 pb-6">
        <FiUser size={40} />
        <h2 className="text-3xl ml-6">Painel de clientes</h2>
      </div>
      <article className="py-6 flex justify-between">
        <div>
          <h3 className="text-xl pb-3">{title}</h3>
          <p className="text-base">{text}</p>
        </div>
        <Button
          title={"Novo cliente"}
          path={"/clientes/novo"}
          style={"bg-koji-orange text-white w-32 h-10 rounded-lg mr-10"}
        />
      </article>
    </section>
  );
};
