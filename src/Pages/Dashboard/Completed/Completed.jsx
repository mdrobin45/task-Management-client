import { Card, CardBody, Typography } from "@material-tailwind/react";

const Completed = () => {
   return (
      <div className="border w-1/3 p-4 shadow-md  rounded-xl h-[80vh] overflow-x-scroll">
         <h2 className="text-2xl font-bold">Completed</h2>
         {/* <div className="bg-blue-500 w-full h-1 z-10"></div> */}
         <Card className="mt-6 border">
            <CardBody>
               <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
               </Typography>
               <p className="text-gray-600">Deadline: 21/12/2023</p>
               <Typography className="text-black pt-2">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
               </Typography>
               <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Medium
               </span>
            </CardBody>
         </Card>
         <Card className="mt-6 border">
            <CardBody>
               <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
               </Typography>
               <p className="text-gray-600">Deadline: 21/12/2023</p>
               <Typography className="text-black pt-2">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
               </Typography>
               <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Medium
               </span>
            </CardBody>
         </Card>
         <Card className="mt-6 border">
            <CardBody>
               <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
               </Typography>
               <p className="text-gray-600">Deadline: 21/12/2023</p>
               <Typography className="text-black pt-2">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
               </Typography>
               <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Medium
               </span>
            </CardBody>
         </Card>
      </div>
   );
};

export default Completed;
