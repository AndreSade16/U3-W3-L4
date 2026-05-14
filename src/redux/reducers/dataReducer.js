const initialState = {
  fetched: [],
  isLoading: false,
  isError: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        fetched: action.payload,
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "SET_IS_ERROR":
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
