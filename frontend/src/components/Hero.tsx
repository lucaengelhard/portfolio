import HeroImage from "/221202-hohlkehle-005.png";

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <HeroText />
      <img src={HeroImage} className="h-full w-full object-contain" alt="" />
    </div>
  );
}

function HeroText() {
  const heroTexts = ["Activist", "Photographer", "Designer", "Programmer"];
  return (
    <div className="p-8 absolute text-7xl top-1/3 font-bold ">
      {heroTexts.map((text, index) => (
        <HeroTextElement key={text + index} text={text} />
      ))}
    </div>
  );
}

function HeroTextElement({ text }: { text: string }) {
  return <div className="cursor-pointer hover:text-purple-600">{text}</div>;
}
