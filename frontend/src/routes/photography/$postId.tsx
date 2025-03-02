import { createFileRoute } from "@tanstack/react-router";

import { BaseLoader } from "../../components/Loading";
import useFetch from "react-fetch-hook";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { imageQualities, ImageSet } from "../../components/Image";
import ErrorPage from "../../components/Error";
import { checkImageQualities } from "../../lib/typeguards";

export const Route = createFileRoute("/photography/$postId")({
  component: PhotoPost,
});

type ImageList = Array<imageQualities>;

function PhotoPost() {
  const [current, setCurrent] = useState(0);
  const [popOut, setPopOut] = useState(false);
  const { postId } = Route.useParams();

  const { isLoading, data, error } = useFetch(
    `${import.meta.env.VITE_PUBLIC_STRAPI_URL}/api/flickr/album?albumId=${postId}`
  );

  if (error) return <ErrorPage />;

  if (!checkImageList(data)) return <ErrorPage />;

  function closePopout() {
    setPopOut(false);
  }

  function prev() {
    if (!checkImageList(data)) {
      setCurrent(0);
      return;
    }
    if (current <= 0) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function next() {
    if (!checkImageList(data)) {
      setCurrent(0);
      return;
    }
    if (current >= data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return isLoading ? (
    <BaseLoader />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((image, i) => (
        <ImageSet
          className="h-full object-cover hover:-translate-x-2 hover:-translate-y-2 transition-transform"
          loading="lazy"
          set={image}
          key={image[0].source}
          onClick={() => {
            setCurrent(i);
            setPopOut(true);
          }}
        />
      ))}
      <ImageGridPopout
        active={popOut}
        current={current}
        images={data}
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
  images: ImageList;
  current: number;
  active: boolean;
  closePopOut: () => void;
  prev: () => void;
  next: () => void;
}) {
  const currentImg = useMemo(() => images[current], [current, images]);

  return active ? (
    <div className="fixed h-screen w-screen top-0 left-0 bg-black z-50">
      <ImageSet
        set={currentImg}
        className="object-contain w-full h-full"
        loading="lazy"
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

function checkImageList(data: unknown): data is ImageList {
  for (const el of data as ImageList) {
    if (!checkImageQualities(el)) return false;
  }

  return true;
}
