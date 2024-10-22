import React from "react";
import "./dashboard.css";
import FetchTodo from "../(site)/_fetch-todo/FetchTodo";
import TaskChart from "../(site)/_task-chart/TaskChart";
import TaskStatus from "../(site)/_task-status/TaskStatus";
const Dashboard = () => {
  return (
    <div className="mx-10 flex-1 ">
      <header className="flex items-center gap-5 ml-12 my-5">
        <span className="text-3xl text-black">Welcome Back Samadhan </span>
        <span>
          {" "}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
            alt="waving-hand-emoji"
            className="hello-hand"
          />
        </span>
      </header>

      <div className=" flex justify-between  h-screen mx-12 p-5 gap-5 ">
        <FetchTodo />
        <div className=" border-solid border-2 w-full rounded-lg">
          <TaskChart />
          <TaskStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
