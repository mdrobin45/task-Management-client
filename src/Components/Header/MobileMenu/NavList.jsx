import { NavLink } from "react-router-dom";

const NavList = () => {
   return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
         <li>
            <NavLink className="text-gray-900" to="/">
               Home
            </NavLink>
         </li>
         <li>
            <NavLink className="text-gray-900" to="/dashboard">
               Dashboard
            </NavLink>
         </li>
         <li>
            <NavLink className="text-gray-900" to="/profile">
               Profile
            </NavLink>
         </li>
      </ul>
   );
};

export default NavList;
