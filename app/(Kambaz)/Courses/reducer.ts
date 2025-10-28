 import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
import { Course } from "../Database/types";

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }: { payload: Course }) => {
      const newCourse: Course = { ...course, _id: uuidv4() };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, { payload: courseId }: { payload: string }) => {
      state.courses = state.courses.filter(
        (course: Course) => course._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }: { payload: Course }) => {
      state.courses = state.courses.map((c: Course) =>
        c._id === course._id ? course : c
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;