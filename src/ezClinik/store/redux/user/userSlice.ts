import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { RootState } from "../store";

interface ILoggedUser {
  id: string,
  token: string,
  tokenDecode: any;
  isLogged: boolean;
}

const initialState: ILoggedUser = {
  id: '',
  token: '',
  tokenDecode: '',
  isLogged: false,
};

export const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: initialState,
  reducers: {
    userLogIn: (state, action: PayloadAction<any>) => {
      console.log('action: ', action);
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        tokenDecode: jwt_decode(action.payload.token),
        isLogged: true,
      };
    },
    userLogOut: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const { userLogIn, userLogOut } = loggedUserSlice.actions;
export const selectLoggedUser = (state: RootState) => state.loggedUser;
export const selectIsUserLogged = (state: RootState) =>
  state.loggedUser.isLogged;
export default loggedUserSlice.reducer;
