import { createLazyFileRoute } from "@tanstack/react-router";

import { gql, useQuery } from "@apollo/client";

import { GetAboutQuery } from "../types/__generated__/graphql";

import Tag from "../components/Tag";
import { TTag } from "../types/api";
import { BaseLoader } from "../components/Loading";
import ErrorPage from "../components/Error";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

const ABOUT = gql`
  query GetAbout {
    about {
      Portrait {
        url
      }
      Welcome
      Stack(pagination: { limit: 100 }) {
        Title
        Color
      }
      Education {
        Title
        Color
      }
      Imprint {
        Title
        Color
      }
    }
  }
`;

function About() {
  const { loading, error, data } = useQuery<GetAboutQuery>(ABOUT);

  if (loading) return <BaseLoader />;
  if (error) return <ErrorPage error={error} />;

  const aboutdata = data!.about!;

  const stack: TTag[] = aboutdata.Stack.map((s) => ({
    Color: s!.Color,
    Title: s!.Title,
  }));

  const education: TTag[] = aboutdata.Education.map((s) => ({
    Color: s!.Color,
    Title: s!.Title,
  }));

  const imprint: TTag[] = aboutdata.Imprint.map((s) => ({
    Color: s!.Color,
    Title: s!.Title,
  }));

  return (
    <div className="w-screen">
      <div className="relative h-screen w-full">
        <img
          className="h-screen w-full object-cover md:object-contain absolute object-left-top -z-10"
          src={aboutdata.Portrait.url}
          alt=""
        />
        <div
          className="md:grid gap-8 h-full"
          style={{ gridTemplateColumns: "30% 70%" }}
        >
          <div className="h-screen w-full hidden md:block"></div>
          <div className="max-w-(--breakpoint-sm) p-8 h-full grid items-center text-5xl font-bold text-purple-600">
            {aboutdata.Welcome}
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

      <div className="flex gap-4 flex-wrap max-w-(--breakpoint-sm)">
        {tags.map((item) => (
          <Tag key={item.Title} tag={item} className="text-xl px-4 py-2" />
        ))}
      </div>
    </div>
  );
}
