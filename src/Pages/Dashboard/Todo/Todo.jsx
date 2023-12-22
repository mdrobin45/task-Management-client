import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { deleteTask, getAllTask } from "../../../API_Request/ApiRequest";
import { AuthContext } from "../../../Context/AuthContextProvider";
import noTaskImage from "../../../assets/images/notask.jpg";
import AddNewModal from "../AddNewModal/AddNewModal";

const Todo = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);
   const { user } = useContext(AuthContext);

   // Tan stack query for get tasks
   let { data: todoList = [], refetch } = useQuery({
      queryKey: ["todoTask"],
      queryFn: () => getAllTask(user?.email),
   });

   // Handle delete task
   const handleDelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            deleteTask(id).then((res) => {
               if (res.id) {
                  refetch();
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                  });
               }
            });
         }
      });
   };

   todoList = todoList.toReversed();
   return (
      <div className="border w-full lg:w-1/3 p-4 shadow-md rounded-xl h-[80vh] overflow-x-scroll">
         <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">To Do</h2>
            <Button onClick={handleOpen} className="py-2 bg-primary">
               Add New
            </Button>
         </div>
         {todoList.length ? (
            <>
               {todoList.map((todo) => (
                  <Card key={todo._id} className="mt-6 shadow-none border">
                     <CardBody>
                        <Typography
                           variant="h5"
                           color="blue-gray"
                           className="mb-2">
                           {todo.title}
                        </Typography>
                        <p className="text-gray-600">
                           Deadline: {todo.dueDate}
                        </p>
                        <Typography className="text-black pt-2">
                           {todo.description}
                        </Typography>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                           {todo.priority}
                        </span>
                        <div className="mt-4 flex gap-3">
                           <Button
                              onClick={() => {
                                 handleDelete(todo._id);
                              }}
                              className="bg-red-600 py-2">
                              Delete
                           </Button>
                           <Button className="bg-primary py-2">Edit</Button>
                        </div>
                     </CardBody>
                  </Card>
               ))}
            </>
         ) : (
            <>
               <img className="mx-auto" src={noTaskImage} alt="Empty" />
            </>
         )}

         <AddNewModal refetch={refetch} open={open} handleOpen={handleOpen} />
      </div>
   );
};

export default Todo;
