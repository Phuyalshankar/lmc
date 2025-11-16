import { motion } from "framer-motion";

export default function Stabilizer() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-5">Stabilizer System</h1>

      <motion.div
        className="bg-blue-100 p-6 rounded-xl shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-blue-800">
          Stabilizer Capacity: 300 kVA
        </h2>

        <p className="mt-3 text-blue-700">
          Voltage stabilizers ensure stable and regulated power for critical
          medical equipment, preventing voltage fluctuations.
        </p>

        <ul className="mt-4 list-disc pl-6 text-blue-700">
          <li>Servo Controlled Voltage Regulation</li>
          <li>Low/High Voltage Protection</li>
          <li>Overload Protection</li>
          <li>Dedicated stabilizers for OT, ICU & Diagnostics</li>
        </ul>
      </motion.div>
    </div>
  );
}
