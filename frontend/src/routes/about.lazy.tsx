import { createLazyFileRoute } from "@tanstack/react-router";

import { gql, useQuery } from "@apollo/client";

import Tag from "../components/Tag";
import { TAbout, TTag } from "../types/api";
import { baseUrl } from "./__root";
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
          Stack {
            Title
            color
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
`;

function About() {
  const { loading, error, data } = useQuery(ABOUT);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const aboutdata = data.about.data as TAbout;

  return (
    <div>
      <div className="grid gap-8" style={{ gridTemplateColumns: "30% 70%" }}>
        <img
          className="h-screen w-full object-cover"
          src={baseUrl + aboutdata.attributes.Portrait.data.attributes.url}
          alt=""
        />
        <div className="max-w-screen-sm p-4 h-full grid items-center text-5xl font-bold text-purple-600">
          {aboutdata.attributes.Welcome}
        </div>
      </div>
      <AboutTagList title="I work with" tags={aboutdata.attributes.Stack} />
      <AboutTagList title="Education" tags={aboutdata.attributes.Education} />
      <AboutTagList title="Imprint" tags={aboutdata.attributes.Imprint} />
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
