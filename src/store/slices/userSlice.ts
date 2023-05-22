import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../interfases";
import { v4 as uuidv4 } from "uuid";

const initialState: IInitialState = {
  email: null,
  token: null,
  id: null,
  tasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    addTask(state, { payload }) {
      state.tasks.push({ id: uuidv4(), task: payload.taskName });
    },
  },
});

export const { setUser, removeUser, addTask } = userSlice.actions;
export default userSlice.reducer;
