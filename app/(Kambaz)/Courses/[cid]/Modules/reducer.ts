import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

const initialState = {
  modules: modules as Module[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }: { payload: { name: string; course: string } }) => {
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.filter((m: Module) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }: { payload: Module }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;