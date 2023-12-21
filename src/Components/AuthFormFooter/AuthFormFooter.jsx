import { Link } from "react-router-dom";

const AuthFormFooter = ({ loginPage, registerPage }) => {
   return (
      <div className="text-center bg-[#f5f5f6] py-4 mt-6 w-full">
         <h2>
            {registerPage && (
               <>
                  <span>Already have an account? Please login </span>
                  <Link
                     className="text-primary font-semibold underline"
                     to="/login">
                     Here
                  </Link>
               </>
            )}
            {loginPage && (
               <>
                  <span>{`Don't have an account? Please register`} </span>
                  <Link
                     className="text-primary font-semibold underline"
                     to="/register">
                     Here
                  </Link>
               </>
            )}
         </h2>
      </div>
   );
};

export default AuthFormFooter;
