import { motion } from "framer-motion";

export default function Solar() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Solar Power Plant</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-yellow-50 rounded-xl shadow"
      >
        <h2 className="text-2xl font-semibold text-yellow-800">
          Solar Plant Capacity: 500 kW
        </h2>

        <p className="mt-3 text-yellow-700">
          LMC operates a 500 kW grid-tied solar plant, helping to reduce monthly
          energy consumption and ensure green hospital practices.
        </p>

        <ul className="mt-4 list-disc pl-6 text-yellow-700">
          <li>Grid-tied Inverters</li>
          <li>Real-time monitoring system</li>
          <li>Reduced carbon footprint</li>
          <li>Peak-hour load sharing</li>
        </ul>
      </motion.div>
    </div>
  );
}
