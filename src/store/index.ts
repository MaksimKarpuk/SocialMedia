import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import { tasksApi } from "./api/tasks";

export const store = configureStore({
  reducer: {
    user: useReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
