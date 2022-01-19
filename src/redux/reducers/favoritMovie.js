const INITIAL_STATE = {
  starred: [],
};

export function modifyStarredMoviesList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STARRED":
      return {
        ...state,
        starred: action.payload,
      };

    default:
      return state;
  }
}
