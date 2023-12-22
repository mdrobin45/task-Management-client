import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllTask } from "../../../API_Request/ApiRequest";
import AddNewModal from "../AddNewModal/AddNewModal";

const Todo = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);

   // Tan stack query for get tasks
   let { data: todoList = [], refetch } = useQuery({
      queryKey: ["todoTask"],
      queryFn: () => getAllTask(),
   });

   todoList = todoList.toReversed();
   return (
      <div className="border w-1/3 p-4 shadow-md rounded-xl h-[80vh] overflow-x-scroll">
         <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">To Do</h2>
            <Button onClick={handleOpen} className="py-2 bg-primary">
               Add New
            </Button>
         </div>
         {todoList.map((todo) => (
            <Card key={todo._id} className="mt-6 shadow-none border">
               <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                     {todo.title}
                  </Typography>
                  <p className="text-gray-600">Deadline: {todo.dueDate}</p>
                  <Typography className="text-black pt-2">
                     {todo.description}
                  </Typography>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                     {todo.priority}
                  </span>
               </CardBody>
            </Card>
         ))}

         <AddNewModal refetch={refetch} open={open} handleOpen={handleOpen} />
      </div>
   );
};

export default Todo;
