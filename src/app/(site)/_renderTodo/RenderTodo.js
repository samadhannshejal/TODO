import React, { useEffect, useState } from "react";

import Card from "../_card/Card";
import { useSelector } from "react-redux";

const RenderTodo = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div>
      {todos.length > 0 &&
        todos?.map((todo) => <Card todo={todo} key={todo.id} />)}
    </div>
  );
};

export default RenderTodo;
