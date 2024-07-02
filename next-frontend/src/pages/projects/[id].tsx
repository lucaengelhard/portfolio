import { gql } from "@apollo/client";
import { client } from "../_document";
import { TProject } from "@/types/api";
import Post from "@/components/Post";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetPostIds {
        designs(pagination: { limit: 100 }) {
          data {
            id
          }
        }
      }
    `,
  });

  const paths = data.designs.data.map(
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
    query: gql`
      query GetProject($id: ID!) {
        design(id: $id) {
          data {
            id
            attributes {
              Title
              Subtitle
              Thumbnail {
                data {
                  attributes {
                    url
                  }
                }
              }
              Tags(pagination: { limit: 100 }) {
                data {
                  id
                  attributes {
                    Tag {
                      Title
                      color
                    }
                  }
                }
              }
              Collaborators(pagination: { limit: 100 }) {
                data {
                  id
                  attributes {
                    Name
                    URL
                    Mail
                  }
                }
              }
              Content
              Gallery {
                Description
                Images(pagination: { limit: 20 }) {
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
      }
    `,
  });

  return { props: { post: data.design.data } };
}

export default function ProjectPost({ post }: { post: TProject }) {
  return <Post project={post} />;
}
