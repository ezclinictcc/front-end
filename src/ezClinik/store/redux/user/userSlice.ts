import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { RootState } from "../store";

interface ILoggedUser {
  id: string,
  token: string,
  tokenDecode: any;
  email: string,
  idUser: string,
  idProfile: string,
  idUserType: string,
  naUserType: string,
  name: string,
  isLogged: boolean;
}

const initialState: ILoggedUser = {
  id: '',
  token: '',
  tokenDecode: '',
  email: '',
  idUser: '',
  idProfile: '',
  idUserType: '',
  naUserType: '',
  name: '',
  isLogged: false,
};

const userTypeResponseIdUserType: any = {
  "4432ffdc-ee48-4678-9ed2-b2b616aa664e": {
    type: "MANAGER",
  },
  "e25ffc8b-6e78-45ee-99da-656f8e32dc91": {
    type: "DOCTOR",
  },
  "91f4a65a-bc48-4750-8711-26b5ab107672": {
    type: "PATIENT",
  },
};

export const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: initialState,
  reducers: {
    userLogIn: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        tokenDecode: jwt_decode(action.payload.token),
        email: action.payload.email,
        idUser: action.payload.id,
        idProfile: action.payload.idProfile,
        idUserType: action.payload.idUserType,
        naUserType: userTypeResponseIdUserType[action.payload.idUserType].type,
        name: action.payload.name,
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
