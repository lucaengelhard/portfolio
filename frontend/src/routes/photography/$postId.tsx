import { createFileRoute } from "@tanstack/react-router";

import { Gallery } from "../../components/Post";
import { gql, useQuery } from "@apollo/client";
import { TPhotoproject } from "../../types/api";
import { baseUrl } from "../__root";

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
          Description
          Gallery(pagination: { limit: 100 }) {
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
        src={baseUrl + project.attributes.Thumbnail.data.attributes.url}
        alt=""
      />
      <div className="grid" style={{ gridTemplateColumns: "20% 80%" }}>
        <h1 className="text-2xl font-bold text-purple-600 p-4">
          {project.attributes.Title}
        </h1>
        //TODO: Rich Text
        <p className="p-4">{project.attributes.Description}</p>
      </div>
      {project.attributes.Gallery && (
        <Gallery gallery={project.attributes.Gallery} height="60vh" />
      )}
    </div>
  );
}
