import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 shadow-lg z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">LMC</div>
          <div>
            <h1 className="font-bold text-lg">LMC Electrical Dept.</h1>
            <p className="text-xs text-blue-200">Lumbini Medical College</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/distribution">Distribution</NavLink>
          <NavLink to="/dg">DG</NavLink>
          <NavLink to="/solar">Solar</NavLink>
          <NavLink to="/stabilizer">Stabilizer</NavLink>
          <NavLink to="/emergency">Emergency</NavLink>
          <NavLink to="/stats">Stats</NavLink>
          <NavLink to="/workflow">Workflow</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="px-3 py-1 rounded hover:bg-white/10">
      {children}
    </Link>
  );
}
