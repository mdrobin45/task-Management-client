import {
   Button,
   Card,
   CardBody,
   CardFooter,
   Dialog,
   Typography,
} from "@material-tailwind/react";

const AddNewModal = ({ open, handleOpen }) => {
   return (
      <div>
         <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[24rem]">
               <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                     Add New Task
                  </Typography>
               </CardBody>
               <CardFooter className="pt-0">
                  <Button className="bg-primary" onClick={handleOpen} fullWidth>
                     Sign In
                  </Button>
               </CardFooter>
            </Card>
         </Dialog>
      </div>
   );
};

export default AddNewModal;
