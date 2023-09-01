import SpeakerCard from "./SpeakerCard";
import { speakers } from "../lib/speakers";
import { motion } from "framer-motion";

export default function Speakers() {
  return (
    <div className="flex min-h-screen w-screen flex-col p-4 font-body text-white md:flex-row lg:px-12">


      <div className="flex-1 md:ml-4">
        <div className="grid grid-cols-2 pr-8 py-10 gap-4 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              image={speaker.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>


      <div className="top-0 flex flex-col justify-center py-10   md:sticky md:h-screen md:w-1/3 md:pb-40">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ threhshold: 0.5, once: true }}
          className="relative z-10 inline-block font-monofont text-center text-5xl font-semibold  uppercase md:text-6xl"
        >
          Our <span className="text-red-600">Artists</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ threhshold: 0.5, once: true }}
          className="mt-12 text-lg font-medium text-white md:text-xl"
        >
          We host a myriad of renowned artists, including Dr. Jayanthi Kumaresh (Veena), Vidushi Jyoti Hegde (Rudra Veena), Pt. Praveen Godkhindi (Flute), and Shri Ramakrishna Murthy (Vocals), to name a few.
        </motion.p>
      </div>
      {/* <div className="flex-1 md:ml-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              image={speaker.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
