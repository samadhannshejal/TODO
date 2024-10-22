"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import Card from "../_card/Card";
import { useSelector } from "react-redux";

export const MyTodo = () => {
   const {todos} =useSelector((state)=>state.todo) 


  return (
    <div className=" border-solid border-2 w-full overflow-scroll px-5 rounded-lg">
      <div className="  text-black sticky top-0 bg-white p-4">My Todo</div>
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id}  />
      ))}
    </div>
  );
};
