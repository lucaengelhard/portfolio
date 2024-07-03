import { Link, createLazyFileRoute } from "@tanstack/react-router";

import { useQuery, gql } from "@apollo/client";
import { TPhotoproject } from "../../types/api";
import { ImageLoader } from "../../components/Loading";

export const Route = createLazyFileRoute("/photography/")({
  component: Photography,
});

const PROJECTS = gql`
  query GetPhotos {
    photoprojects(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          Title
          Thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

function Photography() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <ImageLoader />;
  if (error) return <div>Error</div>;

  const projectlist = data.photoprojects.data as TPhotoproject[];

  return (
    <div>
      {projectlist.map((project) => (
        <Link key={project.id + project.attributes.Title} to={`${project.id}`}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-purple-600 bg-opacity-20 opacity-0 transition-opacity duration-300 grid items-center justify-center hover:opacity-100">
              <h1 className="text-6xl font-bold text-white p-4 inline-block">
                {project.attributes.Title}
              </h1>
            </div>
            <img
              className="h-full object-cover w-full"
              src={project.attributes.Thumbnail.data.attributes.url}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
