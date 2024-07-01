import { ReactNode } from "react";
import { Braces, Camera, CircleUserRound, PenTool } from "lucide-react";

type NavPoint = { id: number; name: string; icon: ReactNode };

export default function Nav() {
  const navPoints: NavPoint[] = [
    { id: 0, name: "Design", icon: <PenTool /> },
    { id: 1, name: "Code", icon: <Braces /> },
    { id: 2, name: "Photography", icon: <Camera /> },
    { id: 3, name: "About", icon: <CircleUserRound /> },
  ];
  return (
    <div className="p-8 flex gap-12 w-full fixed top-0 left-0 z-50">
      <div className="font-bold hover:text-purple-600 cursor-pointer">
        Luca Engelhard
      </div>
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
    <div className="flex gap-2 hover:text-purple-600 cursor-pointer">
      {" "}
      <div>{navPoint.icon}</div>
      <div>{navPoint.name}</div>
    </div>
  );
}
