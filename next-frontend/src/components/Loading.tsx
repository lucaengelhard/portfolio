import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const emptyarray = ["", "", "", "", ""];

export function ProjectListLoader() {
  return (
    <div className=" grid max-h-screen overflow-hidden pointer-events-none grid-cols-2 gap-10 mx-auto max-w-screen-xl p-4 mt-16">
      {emptyarray.map((_, index) => (
        <ProjectCardLoader key={index} />
      ))}
    </div>
  );
}

function ProjectCardLoader() {
  return (
    <div className="relative border-2 overflow-hidden border-black bg-purple-200 rounded-lg">
      <div className="w-full aspect-video bg-purple-400"></div>
      <div className="p-4">
        <h1
          style={{ width: "max-content" }}
          className="text-2xl font-bold text-purple-400 bg-purple-400"
        >
          Loading...
        </h1>
        <h2
          style={{ width: "max-content" }}
          className="text-xl  text-purple-400 bg-purple-400"
        >
          Loading...
        </h2>
        <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
          {emptyarray.map((_, index) => (
            <div
              key={index}
              className="py-1 px-2 rounded-full text-xs border pointer-events-none bg-purple-400 text-purple-400"
            >
              Loading...
            </div>
          ))}
        </div>
      </div>
      <LoaderAnimation />
    </div>
  );
}

function LoaderAnimation() {
  return (
    <motion.div
      initial={{ x: -200, rotate: "12deg" }}
      animate={{ x: 700, rotate: "12deg" }}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 1 }}
      style={{ height: "120%" }}
      className="absolute -top-8 -left-16  w-32 bg-white opacity-50 blur-md"
    ></motion.div>
  );
}

export function ImageLoader() {
  return (
    <div className="h-screen w-screen bg-purple-300 grid justify-center pointer-events-none items-center">
      <div className="flex gap-2 ">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop" }}
        >
          <Camera />{" "}
        </motion.div>
        <div>Loading...</div>
      </div>
    </div>
  );
}
