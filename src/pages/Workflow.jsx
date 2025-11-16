import { motion } from "framer-motion";

const steps = [
  "Department Calls (Emergency / OT / Ward)",
  "Issue Logged in Register",
  "Assign to Available Electrician",
  "Visit the Location",
  "Troubleshoot & Fix the Problem",
  "Verify with Department",
  "Close the Work Ticket",
];

export default function Workflow() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Work Flow</h1>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 }}
          className="bg-blue-100 mb-4 p-4 rounded-lg shadow text-blue-800"
        >
          <strong>{index + 1}.</strong> {step}
        </motion.div>
      ))}
    </div>
  );
}
