import { Html, Head, Main, NextScript } from "next/document";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  PenTool,
  Braces,
  Camera,
  CircleUserRound,
  Instagram,
  Github,
} from "lucide-react";
import { NavPoint } from ".";
import Flickr from "@/assets/Flickr";
import Link from "next/link";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
  cache: new InMemoryCache(),
});

export default function Document() {
  return (
    <Html lang="en">
      <ApolloProvider client={client}>
        <Head />
        <body>
          <Nav />
          <Main />
          <NextScript />
        </body>
      </ApolloProvider>
    </Html>
  );
}

function Nav() {
  const navPoints: NavPoint[] = [
    { id: 0, name: "Design", icon: <PenTool />, path: "/design" },
    { id: 1, name: "Code", icon: <Braces />, path: "/code" },
    { id: 2, name: "Photography", icon: <Camera />, path: "/photography" },
    { id: 3, name: "About", icon: <CircleUserRound />, path: "/about" },
  ];
  return (
    <nav className="flex p-8 fixed top-0 left-0 z-50 w-full transition-colors duration-200 justify-between ">
      <div className="flex gap-12 ">
        <Link
          href={"/"}
          className="font-bold hover:text-purple-600 cursor-pointer [&.active]:text-purple-600"
        >
          Luca Engelhard
        </Link>
        <div className="flex gap-10">
          {navPoints.map((point) => (
            <NavItem key={point.id + point.name} navPoint={point} />
          ))}
        </div>
      </div>{" "}
      <div className="flex gap-10">
        <Link target="_blank" href="https://www.instagram.com/luca__engelhard/">
          <Instagram className="hover:text-purple-600 " />
        </Link>
        <Link target="_blank" href="https://github.com/lucaengelhard">
          <Github className="hover:text-purple-600 " />
        </Link>
        <Link target="_blank" href="https://flickr.com/photos/benengelhard/">
          <Flickr className="hover:text-purple-600 " />
        </Link>
      </div>
    </nav>
  );
}

function NavItem({ navPoint }: { navPoint: NavPoint }) {
  return (
    <Link
      href={navPoint.path}
      className="flex gap-2 hover:text-purple-600 [&.active]:font-bold [&.active]:text-purple-600"
    >
      <div>{navPoint.icon}</div>
      <div>{navPoint.name}</div>
    </Link>
  );
}
