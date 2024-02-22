import { Fragment } from "react";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

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
      <div className="px-5">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
        <BookingItem/>
      </div>
    </Fragment>
  );
}
