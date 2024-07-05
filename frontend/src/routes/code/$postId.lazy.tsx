import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import { TProject } from "../../types/api";
import Post from "../../components/Post";
import { BaseLoader } from "../../components/Loading";
import ErrorPage from "../../components/Error";

export const Route = createLazyFileRoute("/code/$postId")({
  component: Comp,
});

const PROJECT = gql`
  query GetDesign($id: ID!) {
    post(id: $id) {
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
          Tags(pagination: { limit: 100 }) {
            data {
              id
              attributes {
                Title
                Color
              }
            }
          }
          Collaborators(pagination: { limit: 100 }) {
            data {
              id
              attributes {
                Name
                URL
                Mail
              }
            }
          }
          Content
          Gallery {
            Description
            Images(pagination: { limit: 20 }) {
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

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  const project = data.post.data as TProject;

  return <Post project={project} />;
}
