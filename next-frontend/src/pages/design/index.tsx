import Projectlist from "@/components/Project";
import { TProject } from "@/types/api";
import { gql } from "@apollo/client";
import { client } from "../_document";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetDesigns {
        designs(pagination: { limit: 100 }, filters: { Design: { eq: true } }) {
          data {
            id
            attributes {
              Title
              Subtitle
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

  return { props: { designs: data.designs.data } };
}

export default function Designer({ designs }: { designs: TProject[] }) {
  return <Projectlist projectlist={designs} />;
}
