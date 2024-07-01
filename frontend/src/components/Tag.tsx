import fontColorContrast from "font-color-contrast";
import { cn } from "../lib/utils";
import { TTag } from "../types/api";

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
      {tag.Title}
    </div>
  );
}
