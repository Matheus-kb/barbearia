import { Fragment } from "react";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="px-5 pt-5">
      <h2 className="font-bold text-xl">Olá, Matheus!</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEE',' dd 'de' MMMM", { locale: ptBR })}
      </p>
      </div>
    </Fragment>
  );
}
