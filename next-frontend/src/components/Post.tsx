import { useRef } from "react";
import { cn } from "../lib/utils";
import Tag from "./Tag";
import {
  TBlockQuote,
  TCodeBlock,
  TCollaborators,
  TContent,
  TGallery,
  THeading,
  TImage,
  TLink,
  TList,
  TListItem,
  TParagraph,
  TProject,
  TText,
} from "../types/api";

export default function Post({ project }: { project: TProject }) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl my-20">
        <img
          className="w-full object-cover aspect-video px-4"
          src={
            process.env.NEXT_PUBLIC_STRAPI_URL +
            project.attributes.Thumbnail.data.attributes.url
          }
          alt={project.attributes.Title}
        />
        <div className="p-4">
          <h1 className="text-5xl font-bold mb-2 text-purple-600">
            {project.attributes.Title}
          </h1>
          <h2 className="text-xl">{project.attributes.Subtitle}</h2>
          <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
            {project.attributes.Tags.data.map((tag) => (
              <Tag key={tag.id} tag={tag.attributes.Tag} />
            ))}
          </div>
          {project.attributes.Collaborators && (
            <PostCollab collaborators={project.attributes.Collaborators} />
          )}
          {project.attributes.Content && (
            <div className="mt-4">
              <RenderContent content={project.attributes.Content} />
            </div>
          )}
        </div>
      </div>
      {project.attributes.Gallery && (
        <Gallery gallery={project.attributes.Gallery} height="50vh" />
      )}
    </>
  );
}

function PostCollab({ collaborators }: { collaborators: TCollaborators }) {
  if (collaborators.data.length === 0) {
    return;
  }

  return (
    <div className="mt-2 flex gap-4 italic text-purple-600">
      <div>In collaboration with:</div>
      <div>
        {collaborators.data.map((collaborator) => (
          <div>
            <a target="_blank" href={collaborator.attributes.URL}>
              {collaborator.attributes.Name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RenderContent({ content }: { content: TContent }) {
  return (
    <>
      {content.map((block) => {
        switch (block.type) {
          case "paragraph":
            return <PostParagraph paragraph={block} />;
          case "link":
            return <PostLink link={block} />;
          case "text":
            return <PostText text={block} />;
          case "code":
            return <PostCode code={block} />;
          case "heading":
            return <PostHeading heading={block} />;
          case "image":
            return <PostImage image={block} />;
          case "list":
            return <PostList list={block} />;
          case "list-item":
            return <PostListItem item={block} />;
          case "quote":
            return <PostQuote quote={block} />;
          default:
            break;
        }
      })}
    </>
  );
}

function PostText({ text }: { text: TText }) {
  const strikethrough = text.strikethrough ? "line-through" : "";
  const underline = text.underline ? "underline" : "";

  if (text.code) {
    return <code className="bg-purple-200 p-1 rounded-lg">{text.text}</code>;
  }

  return (
    <span
      style={{
        fontWeight: text.bold ? "bold" : undefined,
        fontStyle: text.italic ? "italic" : undefined,
        textDecoration: `${strikethrough} ${underline}`,
      }}
    >
      {text.text}
    </span>
  );
}

function PostParagraph({ paragraph }: { paragraph: TParagraph }) {
  return (
    <p className="max-w-screen-md mb-2">
      <RenderContent content={paragraph.children} />
    </p>
  );
}

function PostLink({ link }: { link: TLink }) {
  return (
    <a href={link.url} target="_blank" className="text-purple-600 underline">
      <RenderContent content={link.children} />
    </a>
  );
}

function PostCode({ code }: { code: TCodeBlock }) {
  return (
    <code className="bg-purple-200 p-3 rounded-lg w-full block max-w-screen-md">
      <RenderContent content={code.children} />
    </code>
  );
}

function PostHeading({ heading }: { heading: THeading }) {
  switch (heading.level) {
    case 1:
      return (
        <h1 className="text-5xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h1>
      );
    case 2:
      return (
        <h2 className="text-3xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h2>
      );
    case 3:
      return (
        <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h3>
      );
    case 4:
      return (
        <h4 className="text-base font-bold text-purple-600 mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h4>
      );
    case 5:
      return (
        <h5 className="text-base font-bold mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h5>
      );
    case 6:
      return (
        <h6 className="text-base underline mt-4 mb-2 max-w-screen-md">
          <RenderContent content={heading.children} />
        </h6>
      );
  }
}

function PostImage({ image }: { image: TImage }) {
  return (
    <figure>
      <img
        src={image.image.url}
        className="max-w-screen-md"
        alt={image.image.alternativeText}
      />{" "}
      <figcaption className="italic">
        <RenderContent content={image.children} />
      </figcaption>
    </figure>
  );
}

function PostList({ list }: { list: TList }) {
  switch (list.format) {
    case "ordered":
      return (
        <ol className="list-decimal my-2 px-4">
          <RenderContent content={list.children} />
        </ol>
      );

    case "unordered":
      return (
        <ul className="list-disc my-2 px-4">
          <RenderContent content={list.children} />
        </ul>
      );
  }
}

function PostListItem({ item }: { item: TListItem }) {
  return (
    <li>
      <RenderContent content={item.children} />
    </li>
  );
}

function PostQuote({ quote }: { quote: TBlockQuote }) {
  return (
    <blockquote className="font-bold text-purple-600 text-2xl px-20 my-10">
      <RenderContent content={quote.children} />
    </blockquote>
  );
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

  const data = [...gallery.Images.data];

  data.reverse();

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
        {data.map((image) => (
          <img
            key={image.attributes.url}
            className="object-cover"
            src={process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.url}
            alt=""
          />
        ))}
      </div>
      <div className="italic pl-4">{gallery.Description}</div>
    </div>
  );
}
