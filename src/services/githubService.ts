import axios, { AxiosRequestConfig } from "axios";
import { axiosGetCancellable } from "../helpers/axios.helper";

export const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://api.github.com/",
  // Auth only works in Server ENV.
  auth: {
    username: process.env.GITHUB_CLIENT_ID!,
    password: process.env.GITHUB_CLIENT_SECRET!,
  },
};

export function searchRepos(searchText: string, language?: string) {
  const query = language ? `${searchText}+language:${language}` : searchText;
  if (isServer()) {
    return axios.get(
      `/search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    );
  }
  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`);
}

export function isServer() {
  return typeof window === "undefined";
}
