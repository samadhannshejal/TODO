"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import DisplayLottie from "../_lottie/DisplayLottie";
import notFound from "../_lottie/lottieAnimation/notFound.json";
import { deleteTodo } from "../../redux/feature/todoSlice";
import Modal from "../_modal/Modal";
import TaskForm from "../_form/Form";

const ViewTodo = () => {
  const { fetchTodo } = useSelector((state) => state.todo);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(fetchTodo.id));
  };

  const handleEdit = () => {
    setModalOpen(true);
  };
  return (
    <div className="w-full p-4">
      {Object.keys(fetchTodo).length > 0 ? (
        <div className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-md p-6 space-y-4 h-full flex flex-col justify-between">
          {/* Title */}
          <div>
            <div className="text-2xl font-semibold text-gray-800 truncate">
              {fetchTodo.title}
            </div>

            {/* Description */}
            <div className="text-gray-600">{fetchTodo.description}</div>

            {/* Priority and Date */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <span className="font-medium">Priority:</span>
                <span
                  className={`ml-2 text-sm px-2 py-1 rounded-lg ${
                    fetchTodo.priority === "Extreme"
                      ? "bg-red-100 text-red-600"
                      : fetchTodo.priority === "High"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {fetchTodo.priority}
                </span>
              </span>
              <span className="text-sm">
                <span className="font-medium">Created on:</span>{" "}
                {fetchTodo.date}
              </span>
            </div>

            {/* Created Time */}
            <div className="text-sm text-gray-500">
              <span className="font-medium">Created Time:</span>{" "}
              {fetchTodo.createdTime}
            </div>
          </div>

          <div className="flex justify-between mt-4 ">
            <button
              className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600"
              onClick={handleDelete}
            >
              <RiDeleteBin7Fill className="text-3xl" />
            </button>
            <button
              className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600"
              onClick={handleEdit}
            >
              <FaEdit className="text-3xl" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <DisplayLottie animationData={notFound} />
        </div>
      )}

      {modalOpen && (
        <Modal title="Edit Task" setModalOpen={setModalOpen}>
          <TaskForm initialTask={fetchTodo} isEdit={true} />
        </Modal>
      )}
    </div>
  );
};

export default ViewTodo;
