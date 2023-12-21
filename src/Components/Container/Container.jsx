const Container = ({ children }) => {
   return (
      <div className="max-w-[1200px] mx-auto px-2 md:px-4 lg:px-6">
         {children}
      </div>
   );
};

export default Container;
