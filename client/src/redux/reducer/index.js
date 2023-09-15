import { ADD_TO_FAVORITES, REMOVE_FAVORITE } from "../actions/action-types";

let initialState = { characters: [], favorites: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (characters) => characters.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        favorites: state.favorites.filter(
          (character) => character.gender === action.payload
        ),
      };

    case SORT:
      let sorted;

      if (action.payload === "Ascendente") {
        sorted = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        sorted = state.favorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        favorites: [...sorted],
      };

    default:
      return state;
  }
}

export default rootReducer;
