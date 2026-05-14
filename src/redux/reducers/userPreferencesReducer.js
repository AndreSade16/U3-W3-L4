const initialState = {
  favorites: [],
};

const userPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITES":
      // ...e anche qui ritorneremo il nuovo stato di Redux
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default userPreferencesReducer;
