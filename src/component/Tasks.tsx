import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import TasksList from "./TasksList";

const Tasks = () => {
  const [tasks, setTasks] = useState<{task:string, id:number, completed:boolean}[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const addTasks = (task: string) => {
    if(task!== ''){
        setTasks([{task:taskInput, id:Date.now(), completed:false}, ...tasks]);
    }else{
        alert('Please Enter any value');
    }
    setTaskInput("");
  };

  return (
    <div>
      <div className="flex m-8 gap-4 justify-center">
        <Input
        id="task"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTasks(taskInput);
            }
          }}
          placeholder="add task.."
          className="w-4/12 border-black"
        />
        <button
          className=" border border-black px-4"
          onClick={() => {
            addTasks(taskInput);
          }}
        >
          +
        </button>
      </div>
      <hr></hr>
      <h1 className="text-[28px] font-bold text-center"> My Tasks</h1>
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};
export default Tasks;
