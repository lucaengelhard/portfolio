import { Link } from "@tanstack/react-router";
import Tag from "./Tag";

import { GetCodesQuery, GetDesignsQuery } from "../types/__generated__/graphql";

export default function Projectlist({
  projectlist,
}: {
  projectlist: GetDesignsQuery["posts"] | GetCodesQuery["posts"];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 mx-auto max-w-(--breakpoint-xl) p-4 mt-16 ">
      {projectlist.map((project) => (
        <Project project={project} key={project!.documentId + project!.Title} />
      ))}
    </div>
  );
}

export function Project({
  project,
}: {
  project: GetDesignsQuery["posts"][number];
}) {
  if (!project) return null;

  return (
    <div
      className="border-2 border-black cursor-pointer rounded-lg hover:text-purple-600 hover:border-purple-600 overflow-hidden"
      key={project.documentId + project!.Title}
    >
      <Link to={`${project!.documentId}`}>
        <img
          className="w-full object-cover aspect-video"
          src={project.Thumbnail.url}
          alt={project.Title}
        />
        <div className="p-4 transition-colors duration-300">
          <h1 className="text-xl sm:text-2xl font-bold ">{project.Title}</h1>
          <h2 className="text-base sm:text-xl">{project.Subtitle}</h2>
          <div className="flex gap-2 mt-3 overflow-hidden flex-wrap">
            {project.Tags.map((tag) => (
              <Tag
                key={tag!.documentId}
                tag={{
                  Color: tag!.Color,
                  Title: tag!.Title,
                }}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
