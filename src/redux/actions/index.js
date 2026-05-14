export const ADD_TO_FAVORITES = (payload) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: payload,
  };
};

export const REMOVE_FROM_FAVORITES = (payload) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: payload,
  };
};
export const SET_IS_LOADING = (payload) => {
  return {
    type: "SET_IS_LOADING",
    payload: payload,
  };
};
export const SET_IS_ERROR = (payload) => {
  return {
    type: "SET_IS_ERROR",
    payload: payload,
  };
};

export const SET_DATA = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch) => {
    dispatch(SET_IS_LOADING(true));
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "SET_DATA", payload: data });
        dispatch(SET_IS_LOADING(false));
      } else {
        alert("Error fetching results");
        dispatch(SET_IS_LOADING(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(SET_IS_ERROR(true));
    }
  };
};
