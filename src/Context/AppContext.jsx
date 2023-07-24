import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer";

const APPContext = createContext();

export const APPContextProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "http://hn.algolia.com/api/v1/search?";
  const fetchAPIData = async (URL) => {
    //Error handling
    try {
      const res = await fetch(URL);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //To remove a story
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_STORY",
      payload: id,
    });
  };

  //Search stories
  const handleSearch = (query) => {
    dispatch({
      type: "SEARCH_STORY",
      payload: query,
    });
  };

  //Page change
  const handlePageChange = (event, value) => {
    dispatch({
      type: "CHANGE_PAGE",
      payload: value,
    });
  };

  //Fetch data from API
  useEffect(() => {
    fetchAPIData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <APPContext.Provider
      value={{ ...state, handleRemove, handleSearch, handlePageChange }}
    >
      {children}
    </APPContext.Provider>
  );
};

export const useGlobalData = () => useContext(APPContext);
