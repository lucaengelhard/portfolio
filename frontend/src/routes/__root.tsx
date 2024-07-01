import {
  Link,
  Outlet,
  ReactNode,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PenTool, Braces, Camera, CircleUserRound } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
      <TanStackRouterDevtools />
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
    <div className="p-8 flex gap-12 w-full fixed top-0 left-0 z-50">
      <Link
        to="/"
        className="font-bold hover:text-purple-600 cursor-pointer [&.active]:text-purple-600"
      >
        Luca Engelhard
      </Link>
      <nav className="flex gap-10">
        {navPoints.map((point, index) => (
          <NavItem key={index + point.id + point.name} navPoint={point} />
        ))}
      </nav>
    </div>
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
