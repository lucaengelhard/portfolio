import { useRef } from "react";
import { cn } from "../lib/utils";
import Tag from "./Tag";
import { TContent, TGallery, TListItem, TProject } from "../types/api";
import { baseUrl } from "../routes/__root";

export default function Post({ project }: { project: TProject }) {
  return (
    <div className="mx-auto max-w-screen-xl mt-16">
      <img
        className="w-full object-cover aspect-video px-4"
        src={baseUrl + project.attributes.Thumbnail.data.attributes.url}
        alt={project.attributes.Title}
      />
      <div className="p-4">
        <h1 className="text-5xl font-bold mb-2 text-purple-600">
          {project.attributes.Title}
        </h1>
        <h2 className="text-xl">{project.attributes.Subtitle}</h2>
        <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
          {project.attributes.Tags.map((tag) => (
            <Tag key={tag.Title} tag={tag} />
          ))}
        </div>
        {project.attributes.Content && (
          <PostContent content={project.attributes.Content} />
        )}
        {project.attributes.Gallery && (
          <Gallery gallery={project.attributes.Gallery} />
        )}
      </div>
    </div>
  );
}

export function PostContent({ content }: { content: TContent }) {
  return (
    <div className="mt-4">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return block.children.map((child) => (
            <p key={child.text + index} className="my-2 max-w-screen-md">
              {child.text}
            </p>
          ));
        }

        if (block.type === "heading") {
          //TODO: Heading Styling
          switch (block.level) {
            case 1:
              return block.children.map((child) => (
                <h1
                  className="text-5xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md"
                  key={child.text + index + block.level}
                >
                  {child.text}
                </h1>
              ));

            case 2:
              return block.children.map((child) => (
                <h2
                  key={child.text + index + block.level}
                  className="text-3xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md"
                >
                  {child.text}
                </h2>
              ));

            case 3:
              return block.children.map((child) => (
                <h3
                  key={child.text + index + block.level}
                  className="text-xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md"
                >
                  {child.text}
                </h3>
              ));

            case 4:
              return block.children.map((child) => (
                <h4
                  className="text-base font-bold text-purple-600 mt-4 mb-2 max-w-screen-md"
                  key={child.text + index + block.level}
                >
                  {child.text}
                </h4>
              ));

            case 5:
              return block.children.map((child) => (
                <h5
                  className="text-base font-bold mt-4 mb-2 max-w-screen-md"
                  key={child.text + index + block.level}
                >
                  {child.text}
                </h5>
              ));

            case 6:
              return block.children.map((child) => (
                <h6
                  className="text-base underline mt-4 mb-2 max-w-screen-md"
                  key={child.text + index + block.level}
                >
                  {child.text}
                </h6>
              ));

            default:
              return block.children.map((child) => (
                <p key={child.text + index + block.level}>{child.text}</p>
              ));
          }
        }

        if (block.type === "image") {
          return (
            <figure key={index + block.type}>
              <img src={block.image.url} className="max-w-screen-md" alt="" />
              <figcaption className="italic">
                {block.children[0].text}
              </figcaption>
            </figure>
          );
        }

        if (block.type === "quote") {
          return block.children.map((child) => (
            <blockquote
              key={child.text + index}
              className="font-bold text-purple-600 text-2xl px-20 my-10"
            >
              {child.text}
            </blockquote>
          ));
        }

        if (block.type === "code") {
          return block.children.map((child) => (
            <code
              key={child.text + index}
              className="bg-purple-200 p-3 rounded-lg w-full block max-w-screen-md"
            >
              {child.text}
            </code>
          ));
        }

        if (block.type === "list") {
          if (block.format === "ordered") {
            return (
              <ol className="list-decimal my-2 px-4">
                {block.children.map((child) => (
                  <ListItem item={child} />
                ))}
              </ol>
            );
          }
          if (block.format === "unordered") {
            return (
              <ul className="list-disc my-2 px-4">
                {block.children.map((child) => (
                  <ListItem item={child} />
                ))}
              </ul>
            );
          }
        }

        console.log(block);
      })}
    </div>
  );

  function ListItem({ item }: { item: TListItem }) {
    return (
      <li key={item.children[0].text} className="">
        {item.children[0].text}
      </li>
    );
  }
}

export function Gallery({
  gallery,
  height,
}: {
  gallery: TGallery;
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
        {gallery.Images.data.map((image) => (
          <img
            key={image.attributes.url}
            className="object-cover"
            src={baseUrl + image.attributes.url}
            alt=""
          />
        ))}
      </div>
      <div className="italic">{gallery.Description}</div>
    </div>
  );
}
