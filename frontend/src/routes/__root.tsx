import {
  Link,
  Outlet,
  ReactNode,
  createRootRoute,
} from "@tanstack/react-router";
import {
  PenTool,
  Braces,
  Camera,
  CircleUserRound,
  Instagram,
  Github,
  Menu,
} from "lucide-react";
import Flickr from "../assets/icons/Flickr";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { cn } from "../lib/utils";

const client = new ApolloClient({
  uri: import.meta.env.VITE_PUBLIC_STRAPI_URL + "/graphql",
  cache: new InMemoryCache(),
});

export const Route = createRootRoute({
  component: () => (
    <>
      <ApolloProvider client={client}>
        <Nav />
        <Outlet />
      </ApolloProvider>
    </>
  ),
});

export type NavPoint = {
  id: number;
  name: string;
  icon: ReactNode;
  path: string;
};

function Nav() {
  const navPoints: NavPoint[] = [
    { id: 0, name: "Design", icon: <PenTool />, path: "/design" },
    { id: 1, name: "Code", icon: <Braces />, path: "/code" },
    { id: 2, name: "Photography", icon: <Camera />, path: "/photography" },
    { id: 3, name: "About", icon: <CircleUserRound />, path: "/about" },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={cn(
        "flex p-8 fixed top-0 left-0 z-50 w-full transition-colors duration-200 justify-between flex-wrap gap-x-4 gap-y-4 bg-white border-b-2 md:border-0 overflow-hidden border-purple-600 md:bg-transparent h-[4.5rem] md:h-fit",
        expanded ? "h-fit" : undefined
      )}
    >
      <div className="flex gap-x-12 flex-wrap gap-y-4">
        <Link
          to="/"
          className="font-bold hover:text-purple-600 cursor-pointer [&.active]:text-purple-600 whitespace-nowrap"
        >
          Luca Engelhard
        </Link>
        <div className="flex gap-x-10 flex-wrap gap-y-2">
          {navPoints.map((point) => (
            <NavItem key={point.id + point.name} navPoint={point} />
          ))}
        </div>
      </div>{" "}
      <div className="flex gap-x-4 md:gap-x-10">
        <a target="_blank" href="https://www.instagram.com/luca__engelhard/">
          <Instagram className="hover:text-purple-600 " />
        </a>
        <a target="_blank" href="https://github.com/lucaengelhard">
          <Github className="hover:text-purple-600 " />
        </a>
        <a target="_blank" href="https://flickr.com/photos/benengelhard/">
          <Flickr className="hover:text-purple-600 " />
        </a>
      </div>
      <button
        onClick={() => setExpanded((current) => !current)}
        className="absolute right-4 top-8 scale-125 text-purple-600 md:hidden"
      >
        <Menu />
      </button>
    </nav>
  );
}

function NavItem({ navPoint }: { navPoint: NavPoint }) {
  return (
    <Link
      to={navPoint.path}
      className="flex gap-2 hover:text-purple-600 [&.active]:font-bold [&.active]:text-purple-600"
    >
      <div>{navPoint.icon}</div>
      <div>{navPoint.name}</div>
    </Link>
  );
}
