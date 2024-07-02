import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";
import Projectlist from "../../components/Project";
import { TProject } from "../../types/api";
import { ProjectListLoader } from "../../components/Loading";

export const Route = createLazyFileRoute("/code/")({
  component: Code,
});

const PROJECTS = gql`
  query GetCodes {
    codes(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          Title
          Subtitle
          Tags(pagination: { limit: 100 }) {
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

  if (loading) return <ProjectListLoader />;
  if (error) return <div>Error</div>;

  return <Projectlist projectlist={data.codes.data as TProject[]} />;
}
