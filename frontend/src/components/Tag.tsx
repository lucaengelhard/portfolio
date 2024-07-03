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
      className={cn(
        "py-1 px-2 rounded-full text-xs border pointer-events-none whitespace-nowrap max-w-full overflow-ellipsis overflow-hidden",
        className
      )}
      style={{
        backgroundColor: tag.Color,
        borderColor: tag.Color,
        color: fontColorContrast(tag.Color),
      }}
    >
      {tag.Title}
    </div>
  );
}
