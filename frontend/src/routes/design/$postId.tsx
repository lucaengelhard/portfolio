import { createFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import { TProject } from "../../types/api";
import Post from "../../components/Post";

export const Route = createFileRoute("/design/$postId")({
  component: Comp,
});

const PROJECT = gql`
  query GetDesign($id: ID!) {
    design(id: $id) {
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

  const project = data.design.data as TProject;

  return <Post project={project} />;
}
