import type { GenericResponse } from "../generic-response";
import type { Dish } from "./dish.type";

export interface DishAPI {
  getAll: () => Promise<GenericResponse<Dish[]>>;
  getOne: (params: GetOneParams) => Promise<GenericResponse<Dish>>;
}

type GetOneParams = {
  id: number;
};
