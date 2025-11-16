export default function Stats() {
  const stats = [
    { label: "Total Staff", value: "6 Technicians" },
    { label: "Monthly Diesel Consumption", value: "3000 Liters" },
    { label: "Monthly Electricity Usage", value: "1,00,000 Units" },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Department Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-700"
          >
            <h2 className="text-xl font-bold text-blue-900">{s.label}</h2>
            <p className="text-3xl mt-3 text-blue-700">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
