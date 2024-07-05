import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import { NavPoint } from "./__root";
import { Braces, Camera, CircleUserRound, PenTool } from "lucide-react";
import { TDBImage } from "../types/api";
import { BaseLoader } from "../components/Loading";
import ErrorPage from "../components/Error";

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
      data {
        attributes {
          Heroimage {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

function Hero() {
  const { loading, error, data } = useQuery(HOME);

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  const image = data.home.data.attributes.Heroimage as TDBImage;

  return (
    <div className="h-screen w-full relative">
      <HeroText />
      <img
        src={image.data.attributes.formats.large.url}
        className="h-full w-full object-contain"
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
      <Link
        to={point.path}
        className="cursor-pointer transition-colors duration-300 hover:text-purple-600"
      >
        {point.name}
      </Link>
    </div>
  );
}
