import { Link, createLazyFileRoute } from "@tanstack/react-router";

import { BaseLoader } from "../../components/Loading";

import { imageQualities, ImageSet } from "../../components/Image";
import ErrorPage from "../../components/Error";
import { checkImageQualities } from "../../lib/typeguards";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/photography/")({
  component: Photography,
});

type AlbumData = Array<{
  id: string;
  title: string;
  description: string;
  primary: imageQualities;
}>;

function Photography() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["photography"],
    queryFn: fetchAlbums,
    refetchOnWindowFocus: false,
  });

  if (error) return <ErrorPage />;

  return isLoading ? (
    <BaseLoader />
  ) : checkAlbumData(data) ? (
    <div>
      {data.map((album) => (
        <Link key={album.id} to={album.id}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-purple-600/20 opacity-0 transition-opacity duration-300 grid items-center justify-center hover:opacity-100">
              <h1 className="text-2xl break-words font-bold text-white text-center p-4 inline-block max-w-full sm:text-6xl">
                {album.title}
              </h1>
            </div>
            <ImageSet
              set={album.primary}
              className="h-full object-cover w-full"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <ErrorPage />
  );
}

function checkAlbumData(data: unknown): data is AlbumData {
  if (!Array.isArray(data as AlbumData)) return false;
  for (const el of data as AlbumData) {
    if (
      !Object.prototype.hasOwnProperty.call(el, "id") ||
      !Object.prototype.hasOwnProperty.call(el, "title") ||
      !Object.prototype.hasOwnProperty.call(el, "description") ||
      !Object.prototype.hasOwnProperty.call(el, "primary")
    )
      return false;

    if (!checkImageQualities(el.primary)) return false;
  }

  return true;
}

async function fetchAlbums() {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_STRAPI_URL}/api/flickr`
  );

  return res.json();
}
