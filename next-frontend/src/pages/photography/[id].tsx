/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";
import { client } from "../_document";
import { RenderContent, Gallery } from "@/components/Post";
import { TPhotoproject } from "@/types/api";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetPostIds {
        photos(pagination: { limit: 100 }) {
          data {
            id
          }
        }
      }
    `,
  });

  const paths = data.photos.data.map(
    (post: { id: { toString: () => any } }) => ({
      params: {
        id: post.id.toString(),
      },
    })
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { data } = await client.query({
    variables: { id: params.id },
    query: gql(`
      query GetPhoto($id: ID!) {
        photo(id: $id) {
          data {
            id
            attributes {
              Title
              Content
              Gallery {
                Description
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
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
    `),
  });

  return { props: { project: data.photo.data } };
}

export default function PhotoPost({ project }: { project: TPhotoproject }) {
  if (project === undefined) {
    return "undefined";
  }
  return (
    <div>
      <img
        className="h-screen w-screen object-cover"
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          project.attributes.Thumbnail.data.attributes.url
        }
      />
      <div className="grid" style={{ gridTemplateColumns: "20% 80%" }}>
        <h1 className="text-2xl font-bold text-purple-600 p-4">
          {project.attributes.Title}
        </h1>
        {project.attributes.Content && (
          <div className="mt-4">
            <RenderContent content={project.attributes.Content} />
          </div>
        )}
      </div>
      {project.attributes.Gallery && (
        <Gallery gallery={project.attributes.Gallery} height="60vh" />
      )}
    </div>
  );
}
