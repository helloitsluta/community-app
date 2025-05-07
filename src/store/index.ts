import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ✅ 직렬화 예외 설정
        ignoredActions: ["auth/setUser"],
        ignoredPaths: ["auth.user"],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
