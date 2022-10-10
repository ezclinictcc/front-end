import { IHttpMethod, ServicesURL } from "../../../ts/enum/fetch-enums";
import fetch from "../../fetch";

interface IUser {
  id?: string;
  name: string;
  idUserType: string;
  idProfile: string;
  password: string;
  email: string;
  country: string;
  state: string;
  city: string;
  district: string;
  number: number;
  cep: string;
}

interface IClinic {
  id?: string;
  name: string;
  clinicSpecialty: string;
  country: string;
  state: string;
  city: string;
  district: string;
  number: number;
  cep: string;
}

const endpoints = {
  user: "user",
  clinic: "clinic",
  profile: "profile",
};

//----------------USER----------------//

export function getUsersData(value?: string) {
  return fetch({
    method: IHttpMethod.GET,
    path: endpoints.user,
    params: value ? { idClinic: value } : null,
    service: ServicesURL.IDENTITY,
  });
}

export function insertUser(user: IUser) {
  return fetch({
    method: IHttpMethod.POST,
    path: endpoints.user,
    data: user,
    service: ServicesURL.IDENTITY,
  });
}

export function updateUser(user: IUser) {
  return fetch({
    method: IHttpMethod.PUT,
    path: endpoints.user,
    data: user,
    service: ServicesURL.IDENTITY,
  });
}

export function deleteUser(userId: string) {
  return fetch({
    method: IHttpMethod.DELETE,
    path: `${endpoints.user}/${userId}`,
    service: ServicesURL.IDENTITY,
  });
}

//----------------CLINIC----------------//

export function getClinicData(value?: string) {
  return fetch({
    method: IHttpMethod.GET,
    path: endpoints.clinic,
    params: value ? { idUser: value } : null,
    service: ServicesURL.IDENTITY,
  });
}

export function insertClinic(clinic: IClinic) {
  return fetch({
    method: IHttpMethod.POST,
    path: endpoints.clinic,
    data: clinic,
    service: ServicesURL.IDENTITY,
  });
}

export function updateClinic(clinic: IClinic) {
  return fetch({
    method: IHttpMethod.PUT,
    path: endpoints.clinic,
    data: clinic,
    service: ServicesURL.IDENTITY,
  });
}

export function deleteClinic(clinicId: string) {
  return fetch({
    method: IHttpMethod.DELETE,
    path: `${endpoints.clinic}/${clinicId}`,
    service: ServicesURL.IDENTITY,
  });
}

//----------------PROFILE----------------//

export function getProfieData() {
  return fetch({
    method: IHttpMethod.GET,
    path: endpoints.profile,
    service: ServicesURL.IDENTITY,
  });
}
