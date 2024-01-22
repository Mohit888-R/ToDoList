import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Trash, Trash2 } from "lucide-react";
import { useState } from "react";

const Tasks = ()=>{   
    const [tasks, setTasks] =useState<string[]>([]);
    const [taskInput, setTaskInput] = useState<string>('');

    const addTasks = (task : string)=>{
        setTasks([taskInput, ...tasks ]);
        setTaskInput('');
    }

//    const deleteTask = (task:string)=>{
//         setTasks((prevTask)=>prevTask.filter((task)=>))
//    }

    return (
        <div>
        <div className="flex m-8 gap-4 justify-center">
            <Input type="text" value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}  placeholder="add task.." className="w-4/12 border-black"/>
            <button className=" border border-black px-4" onClick={()=>{
                addTasks(taskInput)
            }}>
                +
            </button>
        </div>
        <hr></hr>
        <div>
                <h1 className="text-[28px] font-bold text-center"> My Tasks</h1>
               <ul className="w-full flex flex-col gap-4 items-center" >
                {tasks.map((item,index)=>(
                        <li key={index} className=" border inline-flex px-4 py-2  items-center gap-4 ">
                            <Checkbox/>
                            <span> {item}</span>
                            <Trash2 size={18} className="text-red-400"/>
                        </li>
                    ))}
                    
</ul>
        </div>
        </div>
    )
}
export default Tasks;