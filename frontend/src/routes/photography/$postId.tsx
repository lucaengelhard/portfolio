import { createFileRoute } from "@tanstack/react-router";

import { Gallery, RenderContent } from "../../components/Post";
import { gql, useQuery } from "@apollo/client";
import { TPhotoproject } from "../../types/api";

export const Route = createFileRoute("/photography/$postId")({
  component: PhotoPost,
});

const PROJECT = gql`
  query GetPhoto($id: ID!) {
    photo(id: $id) {
      data {
        id
        attributes {
          Title
          Content
          Gallery {
            Description
            Images {
              data {
                attributes {
                  url
                }
              }
            }
          }
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

function PhotoPost() {
  const { postId } = Route.useParams();

  const { loading, error, data } = useQuery(PROJECT, {
    variables: { id: postId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const project = data.photo.data as TPhotoproject;

  return (
    <div>
      <img
        className="h-screen w-screen object-cover"
        src={
          import.meta.env.VITE_PUBLIC_STRAPI_URL +
          project.attributes.Thumbnail.data.attributes.url
        }
        alt=""
      />
      <div className="grid" style={{ gridTemplateColumns: "20% 80%" }}>
        <h1 className="text-2xl font-bold text-purple-600 p-4">
          {project.attributes.Title}
        </h1>
        {project.attributes.Content && (
          <div className="mt-4">
            <RenderContent content={project.attributes.Content} />
          </div>
        )}
      </div>
      {project.attributes.Gallery && (
        <Gallery gallery={project.attributes.Gallery} height="60vh" />
      )}
    </div>
  );
}
