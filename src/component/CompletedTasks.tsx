import { Checkbox } from "@/components/ui/checkbox";
import { TTask } from "@/types/TaskType";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const CompletedTasks = ({
    tasks,
    setTasks,
  }: {
    tasks: TTask[];
    setTasks: React.Dispatch<React.SetStateAction<any>>;
  }) => {
    const [isCompleted, setIsCompleted] = useState<TTask[]>([]);

    const Delete = (item: TTask) => {
        const updateTasks = tasks.filter((task) => task.id === item.id);
        // setIsCompleted(
        //   isCompleted.filter((completedTask) => completedTask.id === item.id)
        // );
        setTasks(updateTasks);
      };

      console.log("task", tasks)
  return (
    <div className="text-center my-4 py-8 border">
      <span className="bg-green-200 px-8 py-2">Completed Tasks : </span>
      <ul className="w-full flex flex-col my-8 gap-4 items-center">
      {tasks.length === 0 && <div className=" text-red-400">Yet not completed any task!</div>}
        {tasks.map((item, index) => (
          <li
            key={index}
            className=" border inline-flex px-4 py-2  items-center gap-4 "
          >
            <Checkbox checked={item.completed} />
            <span> {item.task}</span>
            <Trash2 size={18} className="text-red-400"  onClick={() => Delete(item)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
