import React from "react";
import { MyTodo } from "../(site)/_myTodo/MyTodo";
import ViewTodo from "../(site)/_viewTodo/ViewTodo";

const page = () => {
  return (
    <div className="mx-10 flex-1 rounded-lg">
      <div className=" flex justify-between h-screen mx-12 p-5 gap-5 ">
        <MyTodo />
        <ViewTodo />
      </div>
    </div>
  );
};

export default page;
