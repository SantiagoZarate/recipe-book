const baseUrl = "http://localhost:3000/api";

const api = {
  dish: {
    getAll() {
      const url = baseUrl + "/dish";

      return fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Error getting all the dishes");
        }
        return response.json();
      });
    },
  },
};

export { api };
