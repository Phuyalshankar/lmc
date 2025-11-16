import { motion } from "framer-motion";

export default function DG() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Diesel Generator</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
          Main DG Capacity: 500 kVA
        </h2>
        <p className="mt-3 text-blue-700">
          The 500 kVA DG set provides backup power during grid failure ensuring
          uninterrupted electricity to critical hospital departments.
        </p>

        <ul className="mt-4 list-disc pl-6 text-blue-700">
          <li>Automatic AMF Panel</li>
          <li>Auto Start/Stop</li>
          <li>Load management</li>
          <li>Daily testing & monitoring</li>
        </ul>
      </motion.div>
    </div>
  );
}
