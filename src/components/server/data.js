import axios from "axios";
export const ENDPOINT = "https://64b59a37f3dbab5a95c7870b.mockapi.io/";

export const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});
