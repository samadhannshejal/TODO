"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import Modal from "../_modal/Modal";
import TaskForm from "../_form/Form";
import RenderTodo from "../_renderTodo/RenderTodo";

const FetchTodo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  return (
    <div className=" border-solid border-2 w-full overflow-scroll px-5 rounded-lg" >
      <div className="flex justify-between  text-black sticky top-0 bg-white p-4">
        <div>TODO</div>
        <div
          className="flex text-xl items-center justify-center cursor-pointer "
          onClick={handleModal}
        >
          {" "}
          <span>
            {" "}
            <GoPlus className="text-red-400 " />
          </span>
          Add Task
        </div>
      </div>
      <RenderTodo />
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} title="Add New Task">
          <TaskForm />
        </Modal>
      )}
    </div>
  );
};

export default FetchTodo;
