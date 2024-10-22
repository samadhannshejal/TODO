"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import TaskCategoriesOption from "./_task-options/TaskCategoriesOptions";
import TaskStatusOption from "./_task-options/TaskStatusOption";
const page = () => {
  const { taskStatus, taskCategories } = useSelector((state) => state.todo);
  console.log(taskCategories)

  return (
    <div className="mx-10  flex  flex-col  gap-20 flex-1  border-solid border-2 p-5  rounded-lg ">
      <TaskCategoriesOption taskCategories={taskCategories} />
      <TaskStatusOption taskStatus={taskStatus} />
    </div>
  );
};

export default page;
