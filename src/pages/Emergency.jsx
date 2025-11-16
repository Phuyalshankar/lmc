import { motion } from "framer-motion";

export default function Emergency() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-red-900 mb-4">Emergency Backup</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-red-100 rounded-xl shadow"
      >
        <h2 className="text-2xl text-red-800 font-bold">
          Emergency DG Capacity: 125 kVA
        </h2>

        <p className="mt-3 text-red-700">
          Dedicated 125 kVA generator for Emergency, OT, ICU, NICU and critical
          departments ensuring zero downtime.
        </p>

        <ul className="mt-4 list-disc pl-6 text-red-700">
          <li>Instant startup</li>
          <li>Dedicated backup line</li>
          <li>24/7 monitoring</li>
        </ul>
      </motion.div>
    </div>
  );
}
