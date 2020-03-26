import * as types from "../actions/actionTypes";
import initialSate from "./initialState";

function actionEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialSate.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
