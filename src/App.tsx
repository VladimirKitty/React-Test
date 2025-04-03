import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "G2 GRID FOR CLOUD-NATIVE APPLICATION PROTECTION PLATFORMS (CNAPP)",
    description: "G2 CNAPP Report Spring 2024: Still the #1 CNAPP platform.",
    img: "/src/assets/g2-grid.svg",
    logo: "/src/assets/g2-logo.svg",
    buttonText: "Get Report",
  },
  {
    title: "THE FORRESTER WAVE\nCloud Workload Security, Q1 2024",
    description:
      "Wiz recognized with top score for the current offering category in The Forrester Wave™: Cloud Workload Security, Q1 2024.",
    img: "/src/assets/forrester-wave.png",
    logo: "/src/assets/forrester-logo.svg",
    buttonText: "Get Report",
  },
  {
    title: "FROST RADAR™\nCloud Security Posture Management, 2024",
    description: "Frost & Sullivan recognizes Wiz as Cloud Security Posture Management leader.",
    img: "/src/assets/frost-radar.svg",
    logo: "/src/assets/frost-logo.svg",
    buttonText: "Get Report",
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grey-50 font-sans">   

      <div className="flex flex-col items-center justify-center p-10 bg-grey-white">
        <h2 className="text-3xl font-bold mb-8 text-gray-black">Market leader in product</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <HoverCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HoverCard({ card }: { card: typeof cards[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="row-span-4 grid grid-rows-subgrid overflow-hidden rounded-lg border-2 border-primary-blue bg-white p-5 shadow-[3px_3px_0px_1px_rgba(255,191,214,1)] transition-all ease-card duration-150 hover:shadow-[6px_6px_0px_1px_rgba(255,191,214,1)] hover:md:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.09, ease: [0.4, 0, 1, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-center">
        <p className="tracking-normal text-[1.125rem] leading-7 font-medium uppercase text-primary-blue">
          {card.title}
        </p>
      </div>
      <div className="relative h-80">
        <img src={card.img} alt={card.title} className="object-contain w-full h-full" />
      </div>
      <p className="font-normal tracking-normal text-[1.125rem] leading-7 text-gray-black">
        {card.description}
      </p>
      <div className="flex items-center justify-between gap-4">
        <motion.a
          className="relative inline-flex items-center justify-start whitespace-nowrap rounded-full border border-primary-blue text-base font-medium bg-primary-blue text-white h-10 px-4 py-3 transition-[transform,colors,shadow] duration-200 ease-spring-button hover:shadow-[0px_5px_0px_0px_rgba(255,191,214,1)]"
          whileHover={{ translateY: -5 }}
          transition={{ duration: 0.09, ease: [0.4, 0, 1, 1] }}
        >
          {card.buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right size-4 ml-2"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </motion.a>
        <img src={card.logo} alt="Logo" className="w-auto h-auto" />
      </div>
      {hovered && <HoverEffect />}
    </motion.div>
  );
}

function HoverEffect() {
  return (
    <motion.div
      className="absolute inset-0 bg-transparent opacity-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    />
  );
}