import { Link, createLazyFileRoute } from "@tanstack/react-router";

import HeroImage from "/221202-hohlkehle-005.png";
import { NavPoint } from "./__root";
import { Braces, Camera, CircleUserRound, PenTool } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
    </>
  );
}

function Hero() {
  return (
    <div className="h-screen w-full relative">
      <HeroText />
      <img src={HeroImage} className="h-full w-full object-contain" alt="" />
    </div>
  );
}

function HeroText() {
  const navPoints: NavPoint[] = [
    { id: 0, name: "Design", icon: <PenTool />, path: "/design" },
    { id: 1, name: "Code", icon: <Braces />, path: "/code" },
    { id: 2, name: "Photography", icon: <Camera />, path: "/photography" },
    { id: 3, name: "About", icon: <CircleUserRound />, path: "/about" },
  ];
  return (
    <div className="p-8 absolute text-7xl top-1/3 font-bold ">
      {navPoints.map((point, index) => (
        <HeroTextElement key={point.name + index} point={point} />
      ))}
    </div>
  );
}

function HeroTextElement({ point }: { point: NavPoint }) {
  return (
    <div>
      <Link to={point.path} className="cursor-pointer hover:text-purple-600">
        {point.name}
      </Link>
    </div>
  );
}