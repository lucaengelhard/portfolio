import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery, gql } from "@apollo/client";
import Projectlist from "../../components/Project";
import { BaseLoader } from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { GetCodesQuery } from "../../types/__generated__/graphql";

export const Route = createLazyFileRoute("/code/")({
  component: Code,
});

const PROJECTS_OVERVIEW = gql`
  query GetCodes {
    posts(pagination: { limit: 100 }, filters: { Code: { eq: true } }) {
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

function Code() {
  const { loading, error, data } = useQuery<GetCodesQuery>(PROJECTS_OVERVIEW);

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  return <Projectlist projectlist={data!.posts} />;
}
