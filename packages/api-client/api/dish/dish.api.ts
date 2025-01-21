import type { DishAPI } from "../../types/dish";

function dishApi(baseUrl: string): DishAPI {
  return {
    getAll() {
      const url = baseUrl + "/dish";

      return fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Error getting all the dishes");
        }
        return response.json();
      });
    },
    getOne({ id }) {
      const url = `${baseUrl}/dish/${id}`;

      return fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(`Error getting dish with id ${id}`);
        }
        return response.json();
      });
    },
  };
}

export { dishApi };
