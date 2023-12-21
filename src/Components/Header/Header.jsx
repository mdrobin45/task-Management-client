import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";

export function Header() {
   return (
      <div className="absolute w-full z-10 mt-6">
         <div className="bg-white w-11/12 mx-auto border lg:pl-6 lg:rounded-full mt-4 p-2 z-10">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
               <div>
                  <Link to="/">
                     {/* <img className="w-40" src={logo} alt="Logo" /> */}
                     Robin
                  </Link>
               </div>
               <div>
                  <NavList />
               </div>
               <div className="flex items-center gap-3">
                  {/* {!user ? ( */}
                  <Button
                     className="bg-secondary mr-6 text-white hover:bg-secondary"
                     size="sm"
                     variant="text">
                     <Link to="/login">Log In</Link>
                  </Button>
                  {/* ) : ( */}
                  <ProfileMenu />
                  {/* )} */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
