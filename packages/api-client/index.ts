import { dishApi } from "./api/dish/dish.api";

export const baseUrl = "http://localhost:3000/api";

const api = {
  dish: dishApi,
};

export { api };
