/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";

import { BaseLoader } from "../../components/Loading";
import useFetch from "react-fetch-hook";
import { SetStateAction, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export const Route = createFileRoute("/photography/$postId")({
  component: PhotoPost,
});

function PhotoPost() {
  const [current, setCurrent] = useState(0);
  const [popOut, setPopOut] = useState(false);
  const { postId } = Route.useParams();

  const { isLoading, data } = useFetch(
    `${import.meta.env.VITE_PUBLIC_STRAPI_URL}/api/flickr/album?albumId=${postId}`
  );

  function closePopout() {
    setPopOut(false);
  }

  function prev() {
    if (current <= 0) {
      setCurrent((data as any).length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function next() {
    if (current >= (data as any).length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return isLoading ? (
    <BaseLoader />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {(data as any).map(
        (
          image: { source: string | undefined }[],
          i: SetStateAction<number>
        ) => (
          <img
            className="h-full object-cover"
            key={image[0].source}
            src={image[10].source}
            onClick={() => {
              setCurrent(i);
              setPopOut(true);
            }}
          />
        )
      )}
      <ImageGridPopout
        active={popOut}
        current={current}
        images={data as any}
        closePopOut={closePopout}
        next={next}
        prev={prev}
      />
    </div>
  );
}

function ImageGridPopout({
  current,
  images,
  active,
  closePopOut,
  next,
  prev,
}: {
  images: Array<any>;
  current: number;
  active: boolean;
  closePopOut: () => void;
  prev: () => void;
  next: () => void;
}) {
  const currentImg = useMemo(() => images[current], [current, images]);

  return active ? (
    <div className="fixed h-screen w-screen top-0 left-0 bg-black z-50">
      <img
        className="object-contain w-full h-full"
        src={currentImg[12].source}
        alt=""
      />
      <ArrowLeft
        className="absolute left-4 top-1/2 text-white cursor-pointer hover:text-primary"
        onClick={() => prev()}
      />
      <ArrowRight
        className="absolute right-4 top-1/2 text-white cursor-pointer hover:text-primary"
        onClick={() => next()}
      />
      <X
        className="absolute right-4 top-4 text-white cursor-pointer hover:text-primary"
        onClick={() => closePopOut()}
      />
    </div>
  ) : (
    <div></div>
  );
}
