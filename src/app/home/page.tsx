import CategoryCard from "@/_components/category-card";
import Header from "@/_components/header";
import { Card, CardContent } from "@/_components/ui/card";
import {
  Brain,
  Music,
  PlayCircle,
  BookMarked,
  MessageCircleMore,
  ScrollText,
  CircleCheckBig,
  Circle,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-2 py-5">
        <Card className="bg-gradient-to-r from-blue-400/40 rounded-4xl m-auto w-[90%] py-4 text-white mb-5">
          {/*daily goal concluído: to-green-done opacity-50*/}
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Circle className="text-white/70 size-6 stroke-3" />
                <CircleCheckBig className="text-green-done size-6 stroke-3 hidden" />
                <h1 className="font-bold text-xl">Meta do dia</h1>
              </div>
              <p>
                <span className="font-semibold text-3xl ">500</span> pts
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <CategoryCard
            title="Palavrinhas"
            href="/comunicar"
            Icon={MessageCircleMore}
            variant="red"
          />
          <CategoryCard
            title="Conhecimentinhos"
            href="/aprender"
            Icon={Brain}
            variant="purple"
          />
          <CategoryCard
            title="Musiquinhas"
            href="/musicas"
            Icon={Music}
            variant="green"
          />
          <CategoryCard
            title="Videozinhos"
            href="/videos"
            Icon={PlayCircle}
            variant="blue"
          />
          <CategoryCard
            title="Historinhas"
            href="/historias"
            Icon={BookMarked}
            variant="yellow"
          />
          <CategoryCard
            title="Tarefinhas"
            href="/tarefas"
            Icon={ScrollText}
            variant="pink"
          />
        </div>
      </main>
    </div>
  );
}
