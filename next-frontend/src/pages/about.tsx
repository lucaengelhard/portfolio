import { gql } from "@apollo/client";
import { client } from "./_document";
import { TAbout, TTag } from "@/types/api";
import Tag from "@/components/Tag";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetAbout {
        about {
          data {
            attributes {
              Portrait {
                data {
                  attributes {
                    url
                  }
                }
              }
              Welcome
              Stack(pagination: { limit: 100 }) {
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
              Education {
                Title
                color
              }
              Imprint {
                Title
                color
              }
            }
          }
        }
      }
    `,
  });

  return { props: { about: data.about.data } };
}

export default function About({ about }: { about: TAbout }) {
  const stack = about.attributes.Stack.data.map((s) => s.attributes.Tag);
  return (
    <div>
      <div className="grid gap-8" style={{ gridTemplateColumns: "30% 70%" }}>
        <img
          className="h-screen w-full object-cover"
          src={
            process.env.NEXT_PUBLIC_STRAPI_URL +
            about.attributes.Portrait.data.attributes.url
          }
          alt=""
        />
        <div className="max-w-screen-sm p-4 h-full grid items-center text-5xl font-bold text-purple-600">
          {about.attributes.Welcome}
        </div>
      </div>
      <AboutTagList title="I work with" tags={stack} />
      <AboutTagList title="Education" tags={about.attributes.Education} />
      <AboutTagList title="Imprint" tags={about.attributes.Imprint} />
    </div>
  );
}

function AboutTagList({ title, tags }: { title: string; tags: TTag[] }) {
  return (
    <div
      className="grid gap-8 p-4 mt-10"
      style={{ gridTemplateColumns: "30% 70%" }}
    >
      <div className="text-3xl text-right font-bold ">{title}</div>

      <div className="flex gap-4 flex-wrap max-w-screen-sm">
        {tags.map((item) => (
          <Tag key={item.Title} tag={item} className="text-xl px-4 py-2" />
        ))}
      </div>
    </div>
  );
}
