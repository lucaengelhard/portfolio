import { createLazyFileRoute } from "@tanstack/react-router";

import HeroImage from "/221202-hohlkehle-005.png";
import Projectlist, { TProject } from "../components/Project";

export const Route = createLazyFileRoute("/code")({
  component: Code,
});

function Code() {
  const projects: TProject[] = [
    {
      id: 0,
      title: "Azadî",
      subtitle: "Der kurdische Wunsch nach Freiheit",
      thumbnail: HeroImage,
      tags: [
        { title: "Ausstellungsgestaltung", id: 0, color: "red" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
      ],
    },
    {
      id: 1,
      title: "Healing",
      subtitle: "Magazin über Heilung",
      thumbnail: HeroImage,
      tags: [
        { id: 4, color: "lightblue", title: "Editorial" },
        { id: 5, color: "purple", title: "Fotografie" },
      ],
    },
  ];

  return <Projectlist projectlist={projects} />;
}
