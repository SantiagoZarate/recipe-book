import { dishApi } from "./api/dish/dish.api";

const api = (baseUrl: string) => ({
  dish: dishApi(baseUrl),
});

export { api };
