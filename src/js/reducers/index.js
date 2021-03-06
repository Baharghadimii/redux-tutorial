import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
import { API_ERROR } from "../constants/action-types";


const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  if (action.type === API_ERROR) {
    return action.payload;
  }
  return state;
}

export default rootReducer;