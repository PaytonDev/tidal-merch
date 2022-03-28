import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  currentUser: {}
}

const initialState: AuthState = {
  currentUser: {},
}

const authStateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = authStateSlice.actions
export default authStateSlice.reducer
