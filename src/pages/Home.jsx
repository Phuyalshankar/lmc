import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500 text-center px-4">
      <motion.h1
        className="text-5xl font-black text-blue-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Lumbini Medical College
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl mt-2 text-blue-800 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        Electrical Engineering Department
      </motion.h2>
         <img src="/public/Helipad1.jpg" />
      <motion.p
        className="max-w-2xl mt-5 text-blue-700 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Ensuring Reliable Power Supply, Backup Systems, and Preventive Electrical
        Maintenance for All Departments of LMC Hospital.
      </motion.p>
    </div>
  );
}
