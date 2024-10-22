import React, { Fragment, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { taskPriority } from "../constants/constants";
import { addTodo, editTodo } from "../../redux/feature/todoSlice";
import { useDispatch } from "react-redux";

const TaskForm = ({ initialTask, isEdit }) => {
  const dispatch = useDispatch();
  const initialValues = {
    title: initialTask?.title || "", // Pre-fill with initialTask if editing
    date: initialTask?.date || "",
    priority: initialTask?.priority || "",
    description: initialTask?.description || "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    // priority: Yup.string().required("Priority is required"),
    description: Yup.string().required("Task description is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
    
      if (isEdit) {
        dispatch(editTodo(values));
        formik.resetForm();

        return;
      }
      const newTask = {
        ...values,
        id: crypto.randomUUID(),
        createdTime: new Date().toLocaleTimeString(),
        status: "Not-Started",
      };
      dispatch(addTodo(newTask));

      formik.resetForm();
    },
  });
  useEffect(() => {
    formik.setFieldValue();
  }, []);
  return (
    <form
      className="w-full h-full mx-auto bg-white p-8 rounded-md border-solid  border-2 mt-3"
      onSubmit={formik.handleSubmit}
    >
      {/* Title */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter task title"
        />
      </div>

      {/* Date */}
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">
          Priority
        </span>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            {taskPriority.map((item, idx) => (
              <Fragment key={idx}>
                <span className={item.dotClass}>●</span>
                <label htmlFor="extreme" className="text-sm text-gray-700">
                  {item.taskPriorityName}
                </label>
                <input
                  type="radio"
                  id={item.taskPriorityName}
                  name="priority"
                  value={item.taskPriorityName}
                  onChange={formik.handleChange}
                  checked={item.taskPriorityName}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Task Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Task Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formik.values.description}
          onChange={formik.handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Start writing here..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="p-2 bg-red-400 w-36 rounded-lg text-white cursor-pointer"
      >
        Done
      </button>
    </form>
  );
};

export default TaskForm;
