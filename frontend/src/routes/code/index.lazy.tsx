import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";
import Projectlist from "../../components/Project";
import { TProject } from "../../types/api";
import { BaseLoader } from "../../components/Loading";

export const Route = createLazyFileRoute("/code/")({
  component: Code,
});

const PROJECTS = gql`
  query GetCodes {
    posts(pagination: { limit: 100 }, filters: { Code: { eq: true } }) {
      data {
        id
        attributes {
          Title
          Subtitle
          Tags(pagination: { limit: 100 }) {
            data {
              id
              attributes {
                Title
                Color
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

function Code() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <BaseLoader />;
  if (error) return <div>Error</div>;

  return <Projectlist projectlist={data.posts.data as TProject[]} />;
}
