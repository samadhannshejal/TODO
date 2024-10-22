import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTodo, putTodo } from "../../redux/feature/todoSlice";

const Card = ({ todo }) => {
  const dispatch = useDispatch();
  const { fetchTodo } = useSelector((state) => state.todo);

  const handleTodo = () => {
    dispatch(putTodo(todo));
    dispatch(getSingleTodo(todo));
  };
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y- my-5 cursor-pointer ${
        fetchTodo.id === todo.id ? "bg-gray-200" : ""
      }`}
      onClick={handleTodo}
    >
      {/* Title */}
      <div className="text-2xl font-semibold text-gray-800 truncate">
        {todo.title}
      </div>

      {/* Description */}
      <div className="text-gray-600">{todo.description}</div>

      {/* Priority and Date */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="flex items-center">
          <span className="font-medium">Priority:</span>
          <span
            className={`ml-2 text-sm px-2 py-1 rounded-lg ${
              todo.priority === "Extreme"
                ? "bg-red-100 text-red-600"
                : todo.priority === "Moderate"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {todo.priority}
          </span>
        </span>
        <span className="text-sm">
          <span className="font-medium">Created on:</span> {todo.date}
        </span>
      </div>
    </div>
  );
};

export default Card;
