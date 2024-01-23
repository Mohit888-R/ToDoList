import { Checkbox } from "@/components/ui/checkbox";
import { TTask } from "@/types/TaskType";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import CompletedTasks from "./CompletedTasks";

const PendingTasksList = ({
  tasks,
  setTasks,
}: {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [isCompleted, setIsCompleted] = useState<TTask[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const onCompleted = (item: TTask) => {
    setIsChecked(!isChecked);
    if (!item.completed) {
      const updateTasks = tasks.filter((task) => task.id !== item.id);
      setIsCompleted([
        { task: item.task, id: item.id, completed: true },
        ...isCompleted,
      ]);
      setTasks(updateTasks);
    }
  };

  const Delete = (item: TTask) => {
    const updateTasks = tasks.filter((task) => task.id !== item.id);
    setIsCompleted(
      isCompleted.filter((completedTask) => completedTask.id !== item.id)
    );
    setTasks(updateTasks);
  };
 

  return (
    <div className="grid grdicols-1 lg:grid-cols-2 lg:w-full w-8/12 m-auto">
    <div className=" text-center my-4 py-8 border">
      <span className="bg-gray-200 px-8 py-2">Tasks To Be Done : </span>
      <ul className="w-full flex flex-col my-8 gap-4 items-center">
        {tasks.length === 0 && <div className=" text-red-400" onClick={()=>document.getElementById('task')?.focus()}>Nothing, Please add tasks!!</div>}
        {tasks.map((item, index) => (
          <li
            key={index}
            className=" border inline-flex px-4 py-2  items-center gap-4 "
          >
            <Checkbox
              checked={item.completed}
              onClick={() => onCompleted(item)}
            />
            <span> {item.task}</span>
            <Trash2
              size={18}
              className="text-red-400 cursor-pointer"
              onClick={() => Delete(item)}
            />
          </li>
        ))}
      </ul>
    </div>
      <CompletedTasks tasks={isCompleted} setTasks={setTasks} />
    </div>
  );
};

export default PendingTasksList;
