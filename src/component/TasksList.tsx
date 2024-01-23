import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import PendingTasksList from "./PendingTasksList";
import CompletedTasks from "./CompletedTasks";
import { TTask } from "@/types/TaskType";


const TasksList = ({tasks,setTasks}:{tasks:TTask[], setTasks: React.Dispatch<React.SetStateAction<any>>})=>{
    return (
        <div className="">
          <PendingTasksList tasks={tasks} setTasks={setTasks}/> 

</div>
    )
}

export default TasksList;