import { createFileRoute } from "@tanstack/react-router";
import Post from "../../components/Post";

export const Route = createFileRoute("/code/$postId")({
  component: Comp,
});

function Comp() {
  const { postId } = Route.useParams();
  return <Post context="code" postId={postId} />;
}
