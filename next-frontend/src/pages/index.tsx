/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { gql } from "@apollo/client";
import { client } from "./_document";
import { Braces, Camera, CircleUserRound, PenTool } from "lucide-react";
import { ReactNode } from "react";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getHome {
        home {
          data {
            attributes {
              Heroimage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return { props: { homeContent: data } };
}

export default function Home({ homeContent }: { homeContent: any }) {
  return (
    <main>
      <div className="h-screen w-full relative">
        <HeroText />
        <img
          className="h-full w-full object-contain"
          src={
            process.env.NEXT_PUBLIC_STRAPI_URL +
            homeContent.home.data.attributes.Heroimage.data.attributes.url
          }
          alt={""}
        />
      </div>
    </main>
  );
}

export type NavPoint = {
  id: number;
  name: string;
  icon: ReactNode;
  path: string;
};

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
      <a className="cursor-pointer transition-colors duration-300 hover:text-purple-600">
        {point.name}
      </a>
    </div>
  );
}
