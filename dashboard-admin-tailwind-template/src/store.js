import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './page/redux/create-reducer/CreateReducer'

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

// Lấy RootState và AppDispatch từ store của chúng ta
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// common de khi dispatch asyncthunk ko bi loi
// export const useAppDispatch = () => useDispatch<AppDispatch>()