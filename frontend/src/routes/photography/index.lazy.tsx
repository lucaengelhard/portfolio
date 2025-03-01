import { Link, createLazyFileRoute } from "@tanstack/react-router";

import { BaseLoader } from "../../components/Loading";

import useFetch from "react-fetch-hook";

export const Route = createLazyFileRoute("/photography/")({
  component: Photography,
});

function Photography() {
  const { isLoading, data } = useFetch(
    `${import.meta.env.VITE_PUBLIC_STRAPI_URL}/api/flickr`
  );

  return isLoading ? (
    <BaseLoader />
  ) : (
    <div>
      {(
        data as Array<{
          id: string;
          title: string;
          description: string;
          primary: Array<any>;
        }>
      ).map((album) => (
        <Link key={album.id} to={album.id}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-purple-600 bg-opacity-20 opacity-0 transition-opacity duration-300 grid items-center justify-center hover:opacity-100">
              <h1 className="text-6xl font-bold text-white p-4 inline-block">
                {album.title}
              </h1>
            </div>
            <img
              className="h-full object-cover w-full"
              src={album.primary[11].source}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
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

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

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
 */
