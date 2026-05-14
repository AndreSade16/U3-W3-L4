// qui dentro andiamo a scrivere il "robottino" che grazie allo stato attuale e alle azioni spedite
// è in grado di far avanzare la logica di Redux
// il suo scopo è creare e mantenere lo stato di Redux
// il reducer verrà azionato AUTOMATICAMENTE da REDUX ogni volta che si effettua il dispatch di una action

// ogni reducer è una funzione PURA, ciò significa tra le altre cose che:
// - NON MUTA i propri parametri
// - NON effettua side-effects, chiamate API etc.
// - se fornita dello stesso input, restituisce sempre lo stesso output
// es. funzione che somma due numeri

// poichè il reducer tiene in vita lo stato dell'applicativo, dobbiamo crearne noi una versione iniziale
const initialState = {
  userPreferences: {
    favorites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          favorites: [...state.userPreferences.favorites, action.payload],
        },
      };

    case "REMOVE_FROM_FAVORITES":
      // ...e anche qui ritorneremo il nuovo stato di Redux
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          favorites: state.userPreferences.favorites.filter(
            (favorite) => favorite !== action.payload,
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
