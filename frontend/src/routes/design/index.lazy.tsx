import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import Projectlist from "../../components/Project";
import { TProject } from "../../types/api";
import { ProjectListLoader } from "../../components/Loading";

export const Route = createLazyFileRoute("/design/")({
  component: Designer,
});

const PROJECTS = gql`
  query GetDesigns {
    posts(pagination: { limit: 100 }, filters: { Design: { eq: true } }) {
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

function Designer() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <ProjectListLoader />;
  if (error) return <div>Error</div>;

  return <Projectlist projectlist={data.posts.data as TProject[]} />;
}
