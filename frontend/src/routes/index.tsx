import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import { NavPoint } from "./__root";
import { Braces, Camera, CircleUserRound, PenTool } from "lucide-react";
import { BaseLoader } from "../components/Loading";
import ErrorPage from "../components/Error";

import { GetHomeQuery } from "../types/__generated__/graphql";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
    </>
  );
}

const HOME = gql`
  query getHome {
    home {
      Heroimage {
        url
        formats
      }
    }
  }
`;

function Hero() {
  const { loading, error, data } = useQuery<GetHomeQuery>(HOME);

  if (loading) return <BaseLoader />;
  if (error || !data || !data.home) return <ErrorPage error={error} />;

  return (
    <div className="h-screen w-full relative">
      <HeroText />
      <img
        src={(data.home.Heroimage.formats as any).large.url as string}
        className="h-full w-full object-cover sm:object-contain"
        alt=""
      />
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
    <div className="p-8 absolute hidden sm:block text-5xl md:text-7xl top-1/3 font-bold ">
      {navPoints.map((point, index) => (
        <HeroTextElement key={point.name + index} point={point} />
      ))}
    </div>
  );
}

function HeroTextElement({ point }: { point: NavPoint }) {
  return (
    <div>
      <Link
        to={point.path}
        className="cursor-pointer transition-colors duration-300 hover:text-purple-600"
      >
        {point.name}
      </Link>
    </div>
  );
}
