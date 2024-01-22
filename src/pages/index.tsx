import Image from "next/image";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import Add from "@/component/Tasks";
import Tasks from "@/component/Tasks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NextSeo
      title="To Do List App"
      description="The best to-do list app trusted by 30 million peoples. ToDoList is the individual's favorite to-do list app."/>  
      <Tasks/>
    </div>
  );
}
