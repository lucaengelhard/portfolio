import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";

import Projectlist from "../../components/Project";
import { BaseLoader } from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { GetDesignsQuery } from "../../types/__generated__/graphql";

export const Route = createLazyFileRoute("/design/")({
  component: Designer,
});

const PROJECTS = gql`
  query GetDesigns {
    posts(pagination: { limit: 100 }, filters: { Design: { eq: true } }) {
      documentId
      Title
      Subtitle
      Tags(pagination: { limit: 100 }) {
        documentId
        Title
        Color
      }
      Thumbnail {
        url
      }
    }
  }
`;

function Designer() {
  const { loading, error, data } = useQuery<GetDesignsQuery>(PROJECTS);

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  return <Projectlist projectlist={data!.posts} />;
}
