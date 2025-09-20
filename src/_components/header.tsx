import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Bell, BellDot } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Header() {
  return (
    <div>
      <Card className="bg-blue-600 rounded-none py-4">
        <CardContent className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-[#ffffff]">
              Oi, Luquinhas!
            </h1>
            <p className="text-md font-light text-[#ffffff] mb-1">
              Nível 2 - Aprendiz
            </p>
            <Progress value={75} className="h-1 w-31 bg-blue-300/30" />
          </div>
          <Button
            variant={"ghost"}
            className="rounded-full w-11 h-11 shadow-none bg-blue-700 relative"
          >
            <Bell className="text-white size-7"/>
            <span className="absolute top-2 right-2 size-3 rounded-full bg-red-alert hidden"></span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
