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
import { useForm } from "react-hook-form";

const AddNewModal = ({ open, handleOpen }) => {
   const { register, handleSubmit } = useForm();

   // Form submit
   const onSubmit = (data) => {
      console.log(data);
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

                     <Input {...register("Title")} label="Title" />
                     <div className="mt-3">
                        <Textarea
                           {...register("Description")}
                           label="Description"
                        />
                     </div>
                     <div className="mt-2">
                        <select
                           className="w-full p-2 border border-gray-400 rounded-md"
                           {...register("Priority")}>
                           <option value="Low">Low</option>
                           <option value="Medium">Medium</option>
                           <option value="High">High</option>
                        </select>
                        {/* <Select
                           name="Priority"
                           {...register("Req")}
                           label="Priority">
                           <Option value="Low">Low</Option>
                           <Option value="Medium">Medium</Option>
                           <Option value="High">High</Option>
                        </Select> */}
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
