import * as actions from "./Types/Types";

export const Log_In = (payload) => {
  return {
    type: actions.Log_In,
    payload: payload,
  };
};