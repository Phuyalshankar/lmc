export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="container mx-auto py-6 text-center">
        <p className="font-semibold">Lumbini Medical College — Electrical Department</p>
        <p className="text-sm mt-2">Designed with ❤️ for reliable hospital power systems</p>
        <p className="text-xs mt-3">© {new Date().getFullYear()} LMC Electrical Dept.</p>
      </div>
    </footer>
  );
}
