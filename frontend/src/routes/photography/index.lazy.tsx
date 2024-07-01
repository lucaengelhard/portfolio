import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { placeholderImageProjects } from "../../placeholder/placeholderData";

export const Route = createLazyFileRoute("/photography/")({
  component: Photography,
});

function Photography() {
  return (
    <div>
      {placeholderImageProjects.map((project) => (
        <Link to={`${project.id}`}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-purple-600 bg-opacity-20 opacity-0 transition-opacity duration-300 grid items-center justify-center hover:opacity-100">
              <h1 className="text-6xl font-bold text-white p-4 inline-block">
                {project.title}
              </h1>
            </div>
            <img
              className="h-full object-cover w-full"
              src={project.thumbnail}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
