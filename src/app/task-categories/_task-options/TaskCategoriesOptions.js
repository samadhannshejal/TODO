import React, { useState } from "react";
import Modal from "../../(site)/_modal/Modal";
import CategoriesFrom from "../../(site)/_form/CatergoriesForm";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/feature/todoSlice";
const TaskCategoriesOptions = ({ taskCategories }) => {
  console.log(taskCategories)
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Task categories</h2>
        <button
          className="text-orange-500 font-medium flex items-center"
          onClick={() => setModalOpen(true)}
        >
          <span className="mr-1">+</span> Add Task categories
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100 border-b-2">
          <tr>
            <th className="py-3 px-4 text-left">SN</th>
            <th className="py-3 px-4 text-left">Task Category</th>
            <th className="py-3 px-4 text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {taskCategories?.length>0 && taskCategories?.map((task, index) => (
            <tr key={task.id} className="border-b">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{task.category}</td>
              <td className="py-3 px-4">
                <div className="flex justify-end space-x-2">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center"
                    onClick={() => handleDelete(task.id)}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <CategoriesFrom />
        </Modal>
      )}
    </div>
  );
};

export default TaskCategoriesOptions;
