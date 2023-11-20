import { datVe } from "../../data";
import { LUA_CHON } from "../constant/actions";
let initialState = {
  datVe: datVe, // Dữ liệu đặt vé
  list: datVe[0],
  infor: [],
  name: [],
};
export let datVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LUA_CHON:
      return {
        ...state,
        infor: [...state.infor, action.payload],
      };

    default:
      return state;
  }
};
