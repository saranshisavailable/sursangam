import { motion } from "framer-motion";

export default function About() {
  return (
    <section className=" relative h-screen w-full border border-transparent text-center text-white">
      <div className="mx-auto max-w-4xl lg:pt-36 lg:pl-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 1, once: true }}
          className="mt-12 font-monofont text-6xl font-semibold  uppercase tracking-tighter sm:text-5xl  md:text-6xl"
        >
          <span className="text-red-600 text-8xl">Sursangam</span>
          <span className="text-red-600"> </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 1, once: true }}
          className="mt-12 font-body text-lg  font-medium tracking-wide md:text-xl"
        >
          Sursangam is Srutilaya’s flagship event, held in memory of our beloved founder, the late Professor Suresh Ramaswamy. We host a myriad of renowned artists, including Dr. Jayanthi Kumaresh (Veena), Vidushi Jyoti Hegde (Rudra Veena), Pt. Praveen Godkhindi (Flute), and Shri Ramakrishna Murthy (Vocals), to name a few. The event has a tremendous response from the student and professor body alike and is usually held in our 2800-seat auditorium.

          We are hosting the brilliant Hindustani violinist, Smt. Nandini Shankar, this year. The event is going to be held on 23rd September 2023.
        </motion.p>
        {/* <a
          className="mt-12 inline-block font-body text-lg font-light underline underline-offset-4 transition-colors  hover:text-red-600"
          href="/"
        >
          Learn More about TED and TEDx →
        </a> */}
      </div>
    </section>
  );
}
