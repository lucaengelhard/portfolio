import { createLazyFileRoute } from "@tanstack/react-router";
import chroma from "chroma-js";

import HeroImage from "/221202-hohlkehle-005.png";
import {
  placeHolderTechStack,
  placeholderDesignStack,
} from "../placeholder/placeholderData";
import Tag from "../components/Tag";
export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <div className="grid gap-8" style={{ gridTemplateColumns: "30% 70%" }}>
        <img className="h-screen w-full object-cover" src={HeroImage} alt="" />
        <div className="max-w-screen-sm p-4 h-full grid items-center text-5xl font-bold text-purple-600">
          Hi! I'm Luca, Photgrapher, Designer und also a fledgeling web
          developer.
        </div>
      </div>
      <div
        className="grid gap-8 p-4 mt-10"
        style={{ gridTemplateColumns: "30% 70%" }}
      >
        <div className="text-3xl text-right font-bold text-purple-600">
          I work with:
        </div>

        <div className="flex gap-4 flex-wrap max-w-screen-sm">
          {[...placeholderDesignStack, ...placeHolderTechStack].map(
            (item, index) => (
              <Tag
                tag={{ id: index, title: item, color: chroma.random().hex() }}
                className="text-xl px-4 py-2"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
