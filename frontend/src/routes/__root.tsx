import {
  Link,
  Outlet,
  ReactNode,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {
  PenTool,
  Braces,
  Camera,
  CircleUserRound,
  Instagram,
  Github,
} from "lucide-react";
import Flickr from "../assets/icons/Flickr";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const baseUrl = "http://localhost:1337";

const client = new ApolloClient({
  uri: baseUrl + "/graphql",
  cache: new InMemoryCache(),
});

export const Route = createRootRoute({
  component: () => (
    <>
      <ApolloProvider client={client}>
        <Nav />
        <Outlet />
        <TanStackRouterDevtools />
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
  return (
    <nav className="flex p-8 fixed top-0 left-0 z-50 w-full transition-colors duration-200 justify-between ">
      <div className="flex gap-12 ">
        <Link
          to="/"
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
