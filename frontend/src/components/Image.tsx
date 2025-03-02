import React, { useEffect, useMemo, useRef, useState } from "react";

type ImageSetProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  set: imageQualities;
};

export type imageQualities = Array<{ width: number; source: string }>;

export function ImageSet({ set, ...props }: ImageSetProps) {
  const [current, setCurrent] = useState(set[0]);
  const elementRef = useRef<HTMLImageElement>(null);

  const sorted = useMemo(() => set.sort((a, b) => a.width - b.width), [set]);

  useEffect(() => {
    if (!elementRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const currentwidth = elementRef.current?.clientWidth ?? 0;
      let selection = sorted.find((el) => el.width <= currentwidth);

      if (!selection) selection = set[set.length - 1];

      setCurrent(selection);
    });

    resizeObserver.observe(elementRef.current);
    return () => resizeObserver.disconnect();
  });

  return <img ref={elementRef} src={current.source} {...props} />;
}
