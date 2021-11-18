import axiosApi from "../axios/axios-api";

// interface getUrlsResponse {
//   data: {
//     shortUrl: string;
//     longUrl: string;
//     clicks: string;
//     tag: string;
//   };
// }

export function getUrls() {
  return axiosApi
    .get("get/all")

}

export function createUrl(longUrl: string) {
  return axiosApi.post("create", {
    longURL: `${longUrl}`,
  });
}

export function authorise(email: string, password: string) {
  return axiosApi.post("users/create", {
    email: email,
    password: password,
  });
}

export function registrate(email: string, username: string, password: string) {
  return axiosApi.post("users/create", {
    email: email,
    username: username,
    password: password,
  });
}
