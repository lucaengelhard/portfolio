import { createFileRoute } from "@tanstack/react-router";
import Post from "../../components/Post";

export const Route = createFileRoute("/design/$postId")({
  component: Comp,
});

function Comp() {
  const { postId } = Route.useParams();
  return <Post context="design" postId={postId} />;
}
