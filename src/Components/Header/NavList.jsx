import { NavLink } from "react-router-dom";
import "./style.css";

const NavList = () => {
   return (
      <ul className="flex items-center gap-7">
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
         </li>
         <li>
            <NavLink to="/profile">Profile</NavLink>
         </li>
      </ul>
   );
};

export default NavList;
