import { Link } from "@tanstack/react-router";
import Tag from "./Tag";

import { TProject } from "../types/api";

export default function Projectlist({
  projectlist,
}: {
  projectlist: TProject[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 mx-auto max-w-(--breakpoint-xl) p-4 mt-16 ">
      {projectlist.map((project: TProject) => (
        <Project
          project={project}
          key={project.id + project.attributes.Title}
        />
      ))}
    </div>
  );
}

export function Project({ project }: { project: TProject }) {
  return (
    <div
      className="border-2 border-black cursor-pointer rounded-lg hover:text-purple-600 hover:border-purple-600 overflow-hidden"
      key={project.id + project.attributes.Title}
    >
      <Link to={`${project.id}`}>
        <img
          className="w-full object-cover aspect-video"
          src={project.attributes.Thumbnail.data.attributes.url}
          alt={project.attributes.Title}
        />
        <div className="p-4 transition-colors duration-300">
          <h1 className="text-xl sm:text-2xl font-bold ">
            {project.attributes.Title}
          </h1>
          <h2 className="text-base sm:text-xl">
            {project.attributes.Subtitle}
          </h2>
          <div className="flex gap-2 mt-3 overflow-hidden flex-wrap">
            {project.attributes.Tags.data.map((tag) => (
              <Tag
                key={tag.id}
                tag={{
                  Color: tag.attributes.Color,
                  Title: tag.attributes.Title,
                }}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
