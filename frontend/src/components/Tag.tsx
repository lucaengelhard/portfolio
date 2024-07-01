import fontColorContrast from "font-color-contrast";

export type TTag = {
  id: number;
  title: string;
  color: string;
};

export default function Tag({ tag }: { tag: TTag }) {
  return (
    <div
      className="py-1 px-2 rounded-full text-xs border"
      style={{
        backgroundColor: tag.color,
        borderColor: tag.color,
        color: fontColorContrast(tag.color),
      }}
    >
      {tag.title}
    </div>
  );
}
