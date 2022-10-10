import { IHttpMethod, ServicesURL } from "../../../ts/enum/fetch-enums";
import fetch from "../../fetch";

interface IUser {
  login: string;
  password: string;
}

const endpoints = {
  login: "login",
  logout: "logout",
};

//----------------LOGIN----------------//

// export function getUsersData(value?: string) {
//   return fetch({
//     method: IHttpMethod.GET,
//     path: endpoints.user,
//     params: value ? { idUserType: value } : null,
//     service: ServicesURL.IDENTITY,
//   });
// }

export function createLogin(user: IUser) {
  return fetch({
    method: IHttpMethod.POST,
    path: endpoints.login,
    data: user,
    service: ServicesURL.GATEWAY,
  });
}

export function doLogout() {
  return fetch({
    method: IHttpMethod.DELETE,
    path: endpoints.logout,
    service: ServicesURL.GATEWAY,
  });
}

// export function updateUser(user: IUser) {
//   return fetch({
//     method: IHttpMethod.PUT,
//     path: endpoints.user,
//     data: user,
//     service: ServicesURL.IDENTITY,
//   });
// }

// export function deleteUser(userId: string) {
//   return fetch({
//     method: IHttpMethod.DELETE,
//     path: `${endpoints.user}/${userId}`,
//     service: ServicesURL.IDENTITY,
//   });
// }

//----------------CLINIC----------------//
