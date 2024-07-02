import { createFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import { TProject } from "../../types/api";
import Post from "../../components/Post";

export const Route = createFileRoute("/code/$postId")({
  component: Comp,
});

const PROJECT = gql`
  query GetCode($id: ID!) {
    code(id: $id) {
      data {
        id
        attributes {
          Title
          Subtitle
          Thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          Tags {
            data {
              id
              attributes {
                Tag {
                  Title
                  color
                }
              }
            }
          }
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
        }
      }
    }
  }
`;

function Comp() {
  const { postId } = Route.useParams();

  const { loading, error, data } = useQuery(PROJECT, {
    variables: { id: postId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const project = data.code.data as TProject;

  return <Post project={project} />;
}
