import azadi1 from "/06_ss24_kg7_engelhard_yasar_azadi.jpg";
import azadi2 from "/07_ss24_kg7_engelhard_yasar_azadi.jpg";
import azadi3 from "/08_ss24_kg7_engelhard_yasar_azadi.jpg";

export const placeHolderData = {
  code: [
    {
      id: 0,
      title: "Azadî",
      subtitle: "Der kurdische Wunsch nach Freiheit",
      thumbnail: azadi1,
      tags: [
        { title: "Ausstellungsgestaltung", id: 0, color: "red" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
      ],
    },
    {
      id: 1,
      title: "Healing",
      subtitle: "Magazin über Heilung",
      thumbnail: azadi2,
      tags: [
        { id: 4, color: "lightblue", title: "Editorial" },
        { id: 5, color: "purple", title: "Fotografie" },
      ],
    },
  ],
  design: [
    {
      id: 0,
      title: "Azadî",
      subtitle: "Der kurdische Wunsch nach Freiheit",
      thumbnail: azadi3,
      tags: [
        { title: "Ausstellungsgestaltung", id: 0, color: "red" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
        { id: 1, title: "Bachelor", color: "blue" },
        { id: 2, title: "Projektion", color: "green" },
        { id: 3, title: "Interaktion", color: "yellow" },
      ],
    },
    {
      id: 1,
      title: "Healing",
      subtitle: "Magazin über Heilung",
      thumbnail: azadi1,
      tags: [
        { id: 4, color: "lightblue", title: "Editorial" },
        { id: 5, color: "purple", title: "Fotografie" },
      ],
    },
  ],
  getPost(category: "code" | "design", id: number) {
    return this[category].find((post) => post.id === id);
  },
};

export const placeholderContent = [
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    type: "quote",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    type: "h2",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    type: "h3",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    type: "image",
    content: azadi3,
    subtitle: "Lorem ipsum dolor sit amet",
  },
  {
    type: "h2",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    type: "gallery",
    content: [azadi1, azadi2, azadi3],
    subtitle: "Lorem ipsum dolor sit amet",
  },
];

export const placeHolderImageList = [
  azadi1,
  azadi2,
  azadi3,
  azadi1,
  azadi2,
  azadi3,
  azadi1,
  azadi2,
  azadi3,
  azadi1,
  azadi2,
  azadi3,
  azadi1,
  azadi2,
  azadi3,
  azadi1,
  azadi2,
  azadi3,
];

export const placeholderImageProjects = [
  {
    id: 0,
    title: "Lorem Ipsum",
    thumbnail: azadi1,
    images: placeHolderImageList,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    thumbnail: azadi2,
    images: placeHolderImageList,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    thumbnail: azadi3,
    images: placeHolderImageList,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export function getImgPost(id: number) {
  return placeholderImageProjects.find((post) => post.id === id);
}

export const placeholderDesignStack = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "Premiere Pro",
  "After Effects",
  "Lightroom",
  "Figma",
];

export const placeHolderTechStack = [
  "React",
  "VueJS",
  "TypeScript",
  "CraftCMS",
  "NodeJS",
  "NuxtJS",
];
