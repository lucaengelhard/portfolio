import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@apollo/client";

import { PROJECT } from "../../queries";
import Post from "../../components/Post";
import { BaseLoader } from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { GetProjectQuery } from "../../types/__generated__/graphql";

export const Route = createLazyFileRoute("/code/$postId")({
  component: Comp,
});

function Comp() {
  const { postId } = Route.useParams();

  const { loading, error, data } = useQuery<GetProjectQuery>(PROJECT, {
    variables: { id: postId },
  });

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  return <Post project={data!.post} />;
}
