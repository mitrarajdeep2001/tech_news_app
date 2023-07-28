const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        hits: state.hits.filter((e) => e.objectID !== action.payload),
      };
    case "SEARCH_STORY":
      return {
        ...state,
        query: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload - 1,
      };
    case "API_FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
