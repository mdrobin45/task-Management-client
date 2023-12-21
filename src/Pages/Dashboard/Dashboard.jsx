import Container from "../../Components/Container/Container";
import Completed from "./Completed/Completed";
import Ongoing from "./Ongoing/Ongoing";
import Todo from "./Todo/Todo";

const Dashboard = () => {
   return (
      <Container>
         <div className="flex justify-around mt-6 gap-4">
            <Todo />
            <Ongoing />
            <Completed />
         </div>
      </Container>
   );
};

export default Dashboard;
