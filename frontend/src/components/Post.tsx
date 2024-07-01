import { placeHolderData } from "../hooks/dataContext";
import Tag from "./Tag";

export default function Post({
  context,
  postId,
}: {
  postId: string;
  context: "design" | "code";
}) {
  const project = placeHolderData.getPost(context, parseInt(postId));

  if (project === undefined) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mx-auto max-w-screen-xl mt-16">
      <img
        className="w-full object-cover aspect-video"
        src={project.thumbnail}
        alt={project.title}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <h2 className="text-xl">{project.subtitle}</h2>
        <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
          {project.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <PostContent />
      </div>
    </div>
  );
}

function PostContent() {
  return <div></div>;
}
