import { createLazyFileRoute } from "@tanstack/react-router";

import { gql, useQuery } from "@apollo/client";

import Tag from "../components/Tag";
import { TAbout, TTag } from "../types/api";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

const ABOUT = gql`
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
                Title
                Color
              }
            }
          }
          Education {
            data {
              id
              attributes {
                Title
                Color
              }
            }
          }
          Imprint {
            data {
              id
              attributes {
                Title
                Color
              }
            }
          }
        }
      }
    }
  }
`;

function About() {
  const { loading, error, data } = useQuery(ABOUT);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const aboutdata = data.about.data as TAbout;

  const stack: TTag[] = aboutdata.attributes.Stack.data.map((s) => ({
    Color: s.attributes.Color,
    Title: s.attributes.Title,
  }));

  const education: TTag[] = aboutdata.attributes.Education.data.map((s) => ({
    Color: s.attributes.Color,
    Title: s.attributes.Title,
  }));

  const imprint: TTag[] = aboutdata.attributes.Imprint.data.map((s) => ({
    Color: s.attributes.Color,
    Title: s.attributes.Title,
  }));

  return (
    <div className="w-screen">
      <div className="relative h-screen w-full">
        <img
          className="h-screen w-full object-cover md:object-contain absolute object-left-top -z-10"
          src={aboutdata.attributes.Portrait.data.attributes.url}
          alt=""
        />
        <div
          className="md:grid gap-8 h-full"
          style={{ gridTemplateColumns: "30% 70%" }}
        >
          <div className="h-screen w-full hidden md:block"></div>
          <div className="max-w-screen-sm p-8 h-full grid items-center text-5xl font-bold text-purple-600">
            {aboutdata.attributes.Welcome}
          </div>
        </div>
      </div>
      <AboutTagList title="I work with" tags={stack} />
      <AboutTagList title="Education" tags={education} />
      <AboutTagList title="Imprint" tags={imprint} />
    </div>
  );
}

function AboutTagList({ title, tags }: { title: string; tags: TTag[] }) {
  return (
    <div
      className="md:grid gap-8 p-4 mt-10"
      style={{ gridTemplateColumns: "30% 70%" }}
    >
      <div className="text-3xl mb-4 md:mb-0 md:text-right font-bold ">
        {title}
      </div>

      <div className="flex gap-4 flex-wrap max-w-screen-sm">
        {tags.map((item) => (
          <Tag key={item.Title} tag={item} className="text-xl px-4 py-2" />
        ))}
      </div>
    </div>
  );
}
