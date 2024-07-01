import { Link } from "@tanstack/react-router";
import Tag, { TTag } from "./Tag";

export type TProject = {
  id: number;
  title: string;
  subtitle: string;
  tags: TTag[];
  thumbnail: string;
};

export default function Projectlist({
  projectlist,
}: {
  projectlist: TProject[];
}) {
  return (
    <div className="grid grid-cols-2 gap-10 mx-auto max-w-screen-xl p-4 mt-16">
      {projectlist.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export function Project({ project }: { project: TProject }) {
  return (
    <div className="border-2 border-black cursor-pointer rounded-lg hover:text-purple-600 hover:border-purple-600">
      <Link to={`${project.id}`}>
        <img
          className="w-full object-cover aspect-video"
          src={project.thumbnail}
          alt={project.title}
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <h2 className="text-xl">{project.subtitle}</h2>
          <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
            {project.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
