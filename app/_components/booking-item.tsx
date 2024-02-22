import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C30] text-primary hover:bg-[#221C30] w-fit">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de cabelo</h2>

          <div className="flex gap-2 items-center">
            <Avatar className="w-6 h-6">
                <AvatarImage src="https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png"/>
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
        <p className="text-sm">Fevereiro</p>
        <p className="text-2xl">22</p>
        <p className="text-sm">11:56</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
