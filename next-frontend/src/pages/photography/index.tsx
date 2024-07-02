import { gql } from "@apollo/client";
import { client } from "../_document";
import { TPhotoproject } from "@/types/api";
import Link from "next/link";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetPhotos {
        photos(pagination: { limit: 100 }) {
          data {
            id
            attributes {
              Title
              Thumbnail {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return { props: { photos: data.photos.data } };
}

export default function Photography({ photos }: { photos: TPhotoproject[] }) {
  return (
    <div>
      {photos.map((project) => (
        <Link
          key={project.id + project.attributes.Title}
          href={"/photography/" + project.id}
        >
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-purple-600 bg-opacity-20 opacity-0 transition-opacity duration-300 grid items-center justify-center hover:opacity-100">
              <h1 className="text-6xl font-bold text-white p-4 inline-block">
                {project.attributes.Title}
              </h1>
            </div>
            <img
              className="h-full object-cover w-full"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                project.attributes.Thumbnail.data.attributes.url
              }
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
