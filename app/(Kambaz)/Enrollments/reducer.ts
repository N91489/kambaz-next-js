import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState = {
  enrollments: enrollments as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: Enrollment) => !(e.user === userId && e.course === courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;