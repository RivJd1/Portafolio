import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
import { navItems } from "../data/contenido.js";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-6 py-5 font-bold text-sm sm:text-base transition-colors border-l border-teal-400/40 ${
      isActive ? "bg-teal-700" : "hover:bg-teal-700/60"
    }`;

  return (
    <nav className="bg-teal-600 text-white">
      <div className="max-w-6xl mx-auto flex items-stretch">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-5 font-bold transition-colors ${
              isActive ? "bg-teal-700" : "hover:bg-teal-700/60"
            }`
          }
        >
          <Home size={20} />
        </NavLink>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={linkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
