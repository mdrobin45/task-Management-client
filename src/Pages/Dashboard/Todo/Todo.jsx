import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import AddNewModal from "../AddNewModal/AddNewModal";

const Todo = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);
   return (
      <div className="border w-1/3 p-4 shadow-md rounded-xl h-[80vh] overflow-x-scroll">
         <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">To Do</h2>
            <Button onClick={handleOpen} className="py-2 bg-primary">
               Add New
            </Button>
         </div>
         <Card className="mt-6 shadow-none border">
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
         <Card className="mt-6 shadow-none border">
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
         <Card className="mt-6 shadow-none border">
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
         <AddNewModal open={open} handleOpen={handleOpen} />
      </div>
   );
};

export default Todo;
