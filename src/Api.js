const URI = 'http://localhost:8080/';

export default {
  getMapData() {
    return fetch(
      `${URI}mapdata`,
      { method: 'get' },
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  },

  getDetails(id) {
    return fetch(
      `${URI}details/${id}`,
      { method: 'get' },
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  },

  deleteDetails(id) {
    return fetch(
      `${URI}details/${id}`,
      { method: 'delete' },
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  },

  reactivateMapData() {
    return fetch(
      `${URI}mapdata/reactivate`,
      { method: 'post' },
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  },
};
