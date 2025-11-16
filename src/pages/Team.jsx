import { motion } from "framer-motion";

const team = [
  { name: "Shankar phunyal (Senior Technician)", role: "Senior Technician" },
  { name: "Ganesh Karki (Technician)", role: "Technician" },
  { name: "shreedhar pandy(Technician)", role: "Technician" },
  { name: "Madhu sudan khanal (Operator)", role: "Technician" },
  { name: "paras Gautam (Technician)", role: "Technician" },
  { name: "kiran gaire(Oprator)", role: "Oprator" },
];

export default function Team() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
        Our Electrical Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-blue-700"
          >
            <div className="h-28 w-28 bg-blue-50 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700 mb-4">
              {member.name.split(" ")[0][0]}
            </div>
            <h2 className="text-xl font-bold text-blue-900">{member.name}</h2>
            <p className="text-blue-700 mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
