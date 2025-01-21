import { dishApi } from "./api/dish/dish.api";

// export const baseUrl = "http://localhost:3000/api";
// export const baseUrl = "http://10.0.2.2:3000/api";
export const baseUrl = "http://192.168.0.9:3000/api";

const api = {
  dish: dishApi,
};

export { api };
