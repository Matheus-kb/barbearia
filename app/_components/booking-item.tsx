import { Booking, Prisma } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isFuture, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isFuture(booking.date)
  return (
    <Card>
      <CardContent className="px-0 flex py-0">
        <div className="flex flex-col flex-[3] gap-2 py-5 pl-5">
          <Badge className="w-fit" variant={isBookingConfirmed ? "default" : "secondary"}>
            {isBookingConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>
          <h2 className="font-bold">{booking.service.name}</h2>

          <div className="flex gap-2 items-center">
            <Avatar className="w-6 h-6">
              <AvatarImage src={booking.barbershop.imageUrl} />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">{booking.barbershop.name}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary flex-1">
          <p className="text-sm capitalize">
            {format(booking.date, "MMMM", {
              locale: ptBR,
            })}
          </p>
          <p className="text-2xl">{format(booking.date, "dd")}</p>
          <p className="text-sm">{format(booking.date, "hh:mm")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
