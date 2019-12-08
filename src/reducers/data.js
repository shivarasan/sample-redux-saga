import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { action, payload }) => {
  switch (action) {
    case RECEIVE_API_DATA:
      return payload;
    default:
      return state;
  }
};
