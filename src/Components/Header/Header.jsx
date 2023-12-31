import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import logo from "../../assets/images/logo.svg";
import ProfileMenu from "./ProfileMenu";

export function Header() {
   const { user } = useContext(AuthContext);
   const { pathname } = useLocation();
   return (
      <div className={`${pathname === "/" ? "absolute" : ""} w-full z-10 mt-6`}>
         <div className="bg-white w-11/12 mx-auto border lg:pl-6 lg:rounded-full mt-4 p-2 z-10">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
               <div>
                  <Link to="/">
                     <img className="w-40" src={logo} alt="Logo" />
                  </Link>
               </div>
               <div>
                  {/* <NavList /> */}
                  <h2 className="md:text-2xl text-xl font-bold">
                     Welcome to Pro Task
                  </h2>
               </div>
               <div className="flex items-center gap-3">
                  {!user ? (
                     <Button
                        className="bg-secondary mr-6 text-white hover:bg-secondary"
                        size="sm"
                        variant="text">
                        <Link to="/login">Log In</Link>
                     </Button>
                  ) : (
                     <ProfileMenu />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
