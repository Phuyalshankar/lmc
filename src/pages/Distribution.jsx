import { motion } from "framer-motion";

export default function Distribution() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Main Distribution Station
      </h1>

      <motion.p
        className="text-lg text-blue-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Electrical Department of Lumbini Medical College (LMC) operates a 
        modern and robust power distribution network that ensures continuous, 
        stable, and safe electricity throughout the hospital.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-blue-800 leading-relaxed"
      >
        <p className="mb-4">
          The main power supply is received from the **NEA 11kV HT line**. 
          This 11kV power is stepped down using a **500 kVA Step-Down Transformer** 
          to provide **415V LT supply**.
        </p>

        <p className="mb-4">
          After the transformer, the power flows through the **Automatic Changeover System (ATS)**, which manages:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>NEA Main Line</li>
          <li>500 kVA Diesel Generator (DG) – Fuel Consumption: 60 L/hour</li>
        </ul>

        <p className="mb-4">
          Both sources are connected to the ATS and can be switched automatically or manually as required.  
          The DG provides reliable backup in case of power failure.
        </p>

        <p className="mb-4">
          After the changeover, power passes through a **300 kVA Servo Stabilizer**, 
          ensuring voltage regulation (±1% accuracy) and protecting all sensitive medical equipment.
        </p>

        <p className="mb-6">
          Finally, stabilized power reaches the **Main LT Panel**, from which it is distributed 
          to all LMC buildings, blocks, and departments through sub-main distribution boards.
        </p>
      </motion.div>

      {/* ------------ IMAGES -------------- */}
      <div className="mt-4 grid gap-6">
        <img
          className="h-[350px] w-auto rounded-xl shadow"
          src="/transformer.jpeg"
          alt="Transformer"
        />
        <img
          className="h-[350px] w-auto rounded-xl shadow"
          src="/steblizer.jpeg"
          alt="Stabilizer"
        />
        <img
          className="h-[350px] w-auto rounded-xl shadow"
          src="/oldchangeover.jpeg"
          alt="Changeover"
        />
      </div>

      {/* ------------ LIST -------------- */}
      <ul className="mt-6 text-blue-700 grid gap-3">
        <li>⚡ 11kV to 415V 500 kVA Step-Down System</li>
        <li>⚡ Automatic Changeover (NEA ↔ DG) – DG: 500 kVA, 60 L/hour</li>
        <img src="/public/500kva.jpeg" alt="" />
        <li>⚡ 300 kVA Servo Stabilizer Protection</li>
        <li>⚡ LT Panels, Feeder Pillars, MCC Panels</li>
        <li>⚡ Medical-grade wiring for critical areas</li>
        <li>⚡ Earthing and Lightning Protection System</li>
      </ul>

      {/* ------------ Coverage Areas -------------- */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-8 p-6 bg-blue-100 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold text-blue-900">Coverage Areas</h2>

        <ul className="mt-3 list-disc pl-6">
          <li>Emergency Block</li>
          <li>OT Complex</li>
          <li>ICU and NICU</li>
          <li>Wards</li>
          <li>Hostels & Quarters</li>
          <li>Administrative Buildings</li>
        </ul>
      </motion.div>
    </div>
  );
}
