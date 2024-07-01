import HeroImage from "/221202-hohlkehle-005.png";

type TProject = {
  id: number;
  title: string;
  subtitle: string;
  tags: TTag[];
  thumbnail: string;
};

type TTag = {
  id: number;
  title: string;
  color: string;
};

export default function Designer() {
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

  return (
    <div className="grid grid-cols-2 gap-10 mx-auto max-w-screen-xl p-4">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

function Project({ project }: { project: TProject }) {
  return (
    <div className="border-2 border-black cursor-pointer rounded-lg hover:text-purple-600 hover:border-purple-600">
      <img
        className="w-full object-cover aspect-video"
        src={project.thumbnail}
        alt={project.title}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <h2 className="text-xl">{project.subtitle}</h2>
        <div className="flex gap-2 mt-3 overflow-auto">
          {project.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tag({ tag }: { tag: TTag }) {
  return (
    <div
      className="py-1 px-2 rounded-full text-xs text-black border"
      style={{ backgroundColor: tag.color, borderColor: tag.color }}
    >
      {tag.title}
    </div>
  );
}
