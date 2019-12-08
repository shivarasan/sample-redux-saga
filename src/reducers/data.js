import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return payload;
    default:
      return state;
  }
};
