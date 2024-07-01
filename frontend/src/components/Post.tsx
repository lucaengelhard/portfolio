import { useRef } from "react";
import { cn } from "../lib/utils";
import {
  placeHolderData,
  placeholderContent,
} from "../placeholder/placeholderData";
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
        className="w-full object-cover aspect-video px-4"
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

export function PostContent() {
  return (
    <div className="mt-4">
      {placeholderContent.map((block) => {
        if (block.type === "text") {
          return <p className="my-2 max-w-screen-md">{block.content}</p>;
        }

        if (block.type === "h2") {
          return (
            <h2 className="text-xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md">
              {block.content}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 className="font-bold mt-4 mb-2 max-w-screen-md ">
              {block.content}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote className="font-bold text-purple-600 text-2xl px-20 my-10">
              {block.content}
            </blockquote>
          );
        }

        if (block.type === "image" && typeof block.content === "string") {
          return (
            <figure>
              <img src={block.content} className="max-w-screen-md" alt="" />
              <figcaption className="italic">{block.subtitle}</figcaption>
            </figure>
          );
        }

        if (block.type === "gallery" && typeof block.content !== "string") {
          return <Gallery images={block.content} subtitle={block.subtitle} />;
        }
      })}
    </div>
  );
}

export function Gallery({
  images,
  subtitle,
  height,
}: {
  images: string[];
  subtitle?: string;
  height?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (wrapperRef.current === null) return;

    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const divWidth = rect.width;

    if (clickX < divWidth / 2) {
      wrapper.scrollLeft -= 400;
    } else {
      wrapper.scrollLeft += 400;
    }
  }

  return (
    <div className="my-8 relative">
      <div
        onClick={onClick}
        ref={wrapperRef}
        className={cn(
          "flex gap-4 overflow-auto no-scrollbar cursor-pointer",
          height === undefined ? "h-96" : undefined
        )}
        style={{ height: height, scrollBehavior: "smooth" }}
      >
        {images.map((image) => (
          <img className="object-cover" src={image} alt="" />
        ))}
      </div>
      <div className="italic">{subtitle}</div>
    </div>
  );
}
