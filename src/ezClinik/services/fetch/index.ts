import { getBaseURL } from "../propertiesAccess";
import customAxios from "../../utils/customAxios";

/**
 * @description makes http request according to the informed data.
 * @param param request params.
 * @returns fetch function.
 */
const fetch = ({
  method = "GET",
  path,
  params,
  headers,
  responseType,
  data,
  service,
}: any) => {
  return new Promise(async (resolve, reject) => {
    const loggedSession = sessionStorage.getItem('persist:root');
    const tokenSplit = loggedSession && JSON.parse(JSON.parse(loggedSession).loggedUser);

    if (!service) throw Error("url.not.found");
    customAxios({
      headers: {
        ...headers,
        Authorization: tokenSplit.token 
      },
      url: `${getURl(service)}${path}`,
      method,
      params,
      responseType,
      data,
      withCredentials: true,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

/**
 * @description get url by service informed.
 * @param service is the service that fetch requires.
 * @returns base url.
 */

function getURl(service: string) {
  const baseURLS: string[] = getBaseURL().split("|") || [];
  const baseURL: string[] =
    baseURLS?.filter((url) => url.includes(service)) || [];
  if (!baseURL[0]) {
    throw Error("url.not.found");
  }
  return baseURL[0].split(";")[1] || "";
}

export default fetch;
