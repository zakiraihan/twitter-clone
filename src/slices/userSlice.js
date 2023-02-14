import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    fullname: "Zaki Raihan",
    username: "@narukami_80",
    photo: "https://pbs.twimg.com/profile_images/1614997164140433410/OM6aUbAO_400x400.jpg",
    headerPhoto: "https://pbs.twimg.com/profile_banners/1590285194/1646365433/1500x500",
  },
  jwtToken: "token"
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setJwtToken: {
      reducer(state, action) {
        state.jwtToken = action.payload;
      }
    }
  }
})

export const getUser = (state) => state.user.user;

export const { setJwtToken } = userSlice.actions;

export default userSlice.reducer;