import React, { useEffect, useMemo, useRef, useState } from "react";

type ImageSetProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  set: imageQualities;
};

export type imageQualities = Array<{
  width: number;
  source: string;
  height: number;
  label: string;
}>;

//TODO: fix images not loading
export function ImageSet({ set, ...props }: ImageSetProps) {
  const [current, setCurrent] = useState(set[0]);
  const elementRef = useRef<HTMLImageElement>(null);

  const sorted = useMemo(() => set.sort((a, b) => a.width - b.width), [set]);

  useEffect(() => {
    if (!elementRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const currentwidth = elementRef.current?.clientWidth ?? 0;
      const currentHeight = elementRef.current?.clientHeight ?? 0;

      let selection = sorted.find(
        (el) =>
          el.width >= currentwidth &&
          el.height >= currentHeight &&
          !(
            el.label.toLowerCase().includes("3k") ||
            el.label.toLowerCase().includes("4k") ||
            el.label.toLowerCase().includes("5k") ||
            el.label.toLowerCase().includes("6k") ||
            el.label.toLowerCase().includes("X-Large")
          )
      );

      if (!selection) console.log(set);

      if (!selection) selection = set[set.length - 1];

      setCurrent(selection);
    });

    resizeObserver.observe(elementRef.current);
    return () => resizeObserver.disconnect();
  });

  return (
    <img
      onError={() => {
        console.error(current);
      }}
      ref={elementRef}
      src={current.source}
      {...props}
    />
  );
}
