import fontColorContrast from "font-color-contrast";
import { cn } from "../lib/utils";

export type TTag = {
  id: number;
  title: string;
  color: string;
};

export default function Tag({
  tag,
  className,
}: {
  tag: TTag;
  className?: string;
}) {
  return (
    <div
      className={cn("py-1 px-2 rounded-full text-xs border", className)}
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
