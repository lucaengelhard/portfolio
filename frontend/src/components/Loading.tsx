import { motion } from "framer-motion";
import { Braces, Camera, PenTool } from "lucide-react";

const emptyarray = ["", "", "", "", ""];

export function ProjectListLoader() {
  return (
    <div className=" grid max-h-screen overflow-hidden pointer-events-none grid-cols-2 gap-10 mx-auto max-w-screen-xl p-4 mt-16">
      {emptyarray.map(() => (
        <ProjectCardLoader />
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
          {emptyarray.map(() => (
            <div className="py-1 px-2 rounded-full text-xs border pointer-events-none bg-purple-400 text-purple-400">
              Loading...
            </div>
          ))}
        </div>
      </div>
      <LoaderAnimation />
    </div>
  );
}

export function PostLoader() {
  return (
    <div className="h-screen fixed inset-0">
      <div className="mx-auto max-w-screen-xl my-20">
        <div className="w-full object-cover aspect-video sm:px-4 bg-purple-400"></div>
        <div className="p-4">
          <h1 className="text-3xl w-max sm:text-5xl font-bold mb-2 bg-purple-600 text-purple-600">
            Loadiiiiiiiiiii
          </h1>
          <h2 className="text-xl w-max bg-purple-400 text-purple-400">
            Loading
          </h2>
          <div className="flex gap-2 mt-3 overflow-auto no-scrollbar">
            {emptyarray.map(() => (
              <div className="py-1 px-2 rounded-full text-xs border pointer-events-none bg-purple-400 text-purple-400">
                Loading...
              </div>
            ))}
          </div>
        </div>
      </div>
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
export function BaseLoader() {
  return (
    <div className="h-screen w-screen bg-white text-purple-600 grid justify-center pointer-events-none items-center">
      <div className="flex gap-2 ">
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, repeatType: "loop" }}
        >
          <PenTool />{" "}
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop" }}
        >
          <Braces />{" "}
        </motion.div>
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, repeatType: "loop" }}
        >
          <Camera />{" "}
        </motion.div>
      </div>
    </div>
  );
}
