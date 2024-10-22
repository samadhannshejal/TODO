import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/feature/todoSlice";
import * as Yup from "yup";
const CategoriesForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    category: "",
  };
  const validationSchema = Yup.object({
    category: Yup.string().required("Category is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value) => {
      const newCategory = {
        category: value,
        id: crypto.randomUUID(),
      };
      dispatch(addCategory(newCategory));
      formik.resetForm();
    },
  });
  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-md border border-gray-200">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Add categories ..."
            value={formik.values.category}
            onChange={formik.handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoriesForm;
