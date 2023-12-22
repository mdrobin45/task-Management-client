import {
   Button,
   Card,
   CardBody,
   CardFooter,
   Dialog,
   Input,
   Textarea,
   Typography,
} from "@material-tailwind/react";
import moment from "moment";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { createNewTask } from "../../../API_Request/ApiRequest";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { showToast } from "../../../Utils/toast";
import "./style.css";

const AddNewModal = ({ open, handleOpen, refetch }) => {
   const { control, register, handleSubmit } = useForm();
   const { user } = useContext(AuthContext);

   // Form submit
   const onSubmit = (data) => {
      const date = moment(data.dueDate).format("DD MMMM YYYY");
      const task = {
         title: data.title,
         description: data.description,
         dueDate: date,
         priority: data.priority,
         email: user?.email,
      };

      createNewTask(task).then((res) => {
         if (res.id) {
            refetch();
            showToast("Task Added", "success");
         }
      });
   };
   return (
      <div>
         <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[24rem]">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <CardBody className="flex flex-col gap-4">
                     <Typography variant="h4" color="blue-gray">
                        Add New Task
                     </Typography>

                     <Input {...register("title")} label="Title" />
                     <div className="mt-3">
                        <Textarea
                           {...register("description")}
                           label="Description"
                        />
                     </div>
                     <div className="mt-2">
                        <select
                           className="w-full p-2 border border-gray-400 rounded-md"
                           {...register("priority")}>
                           <option value="Low">Low</option>
                           <option value="Medium">Medium</option>
                           <option value="High">High</option>
                        </select>
                     </div>
                     <div id="taskDatePick" className="mt-2 w-full">
                        <Controller
                           control={control}
                           name="dueDate"
                           render={({ field }) => (
                              <DatePicker
                                 placeholderText="Due Date"
                                 className="w-full border border-gray-400 rounded-md p-2"
                                 selected={field.value}
                                 onChange={(date) => field.onChange(date)}
                              />
                           )}
                        />
                     </div>
                  </CardBody>
                  <CardFooter className="pt-0">
                     <Button
                        type="submit"
                        className="bg-primary"
                        onClick={handleOpen}
                        fullWidth>
                        Save
                     </Button>
                  </CardFooter>
               </form>
            </Card>
         </Dialog>
      </div>
   );
};

export default AddNewModal;
