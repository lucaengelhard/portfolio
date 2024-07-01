import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import Projectlist from "../../components/Project";

export const Route = createLazyFileRoute("/design/")({
  component: Designer,
});

const PROJECTS = gql`
  query GetDesigns {
    designs {
      data {
        id
        attributes {
          Title
          Subtitle
          Tags {
            Title
            color
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

export type TProject = {
  id: string;
  attributes: {
    Title: string;
    Subtitle: string;
    Tags: {
      Title: string;
      color: string;
    }[];
    Thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

function Designer() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <Projectlist projectlist={data.designs.data as TProject[]} />;
}
