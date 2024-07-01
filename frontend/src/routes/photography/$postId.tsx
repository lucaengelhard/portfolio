import { createFileRoute } from "@tanstack/react-router";
import { getImgPost } from "../../placeholder/placeholderData";
import { Gallery } from "../../components/Post";

export const Route = createFileRoute("/photography/$postId")({
  component: PhotoPost,
});

function PhotoPost() {
  const { postId } = Route.useParams();
  const post = getImgPost(parseInt(postId));

  if (post === undefined) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <img
        className="h-screen w-screen object-cover"
        src={post.thumbnail}
        alt=""
      />
      <div className="grid" style={{ gridTemplateColumns: "20% 80%" }}>
        <h1 className="text-2xl font-bold text-purple-600 p-4">{post.title}</h1>
        <p className="p-4">{post.description}</p>
      </div>
      <Gallery images={post.images} height="60vh" />
    </div>
  );
}
