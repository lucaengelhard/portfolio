import HeroImage from "/221202-hohlkehle-005.png";

export const placeHolderData = {
  code: [
    {
      id: 0,
      title: "Azadî",
      subtitle: "Der kurdische Wunsch nach Freiheit",
      thumbnail: HeroImage,
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
      thumbnail: HeroImage,
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
      thumbnail: HeroImage,
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
      thumbnail: HeroImage,
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
/**
export const DataContext: React.Context<{
  design: TProject[];
  code: TProject[];
}> = createContext(placeHolderData);
 */
