import { useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE = {
  destination: undefined,
  dates: [],
  bookingCount: {
    adult: undefined,
    children: undefined,
    rooms: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        dates: state.dates,
        bookingCount: state.bookingCount,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
