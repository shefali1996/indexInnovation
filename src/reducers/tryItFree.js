import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../actions/constants";

const initialState = {
  tryItData: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
  },

};

const sendTryItDetailRequest = (state, action) =>{  
  console.log('tttttttttttttrrrrrrrr');
  return update(state, {
    tryItData: {
      isLoading: { $set: true },
      isError: { $set: false },
      isSuccess: { $set: false },
      message: { $set: "" }
    }
  });
}
 
const sendTryItDetailSuccess = (state, action) =>
  update(state, {
    tryItData: {
      data: { $set: action.payload },
      isLoading: { $set: false },
      isError: { $set: false },
      isSuccess: { $set: true },
      message: { $set: "" }
    }
  });

  const sendTryItDetailError = (state, action) =>{  
    console.log(action.payloa,'jjjjjjjjjjjj');
      
   return update(state, {
      tryItData: {
        data: { $set: action.payload },
        isLoading: { $set: false },
        isError: { $set: true },
        isSuccess: { $set: false },
        message: { $set: "" }
      }
    })
  }


export default handleActions(
  {
    [constants.SEND_TRY_IT_DETAIL_REQUEST]: sendTryItDetailRequest,
    [constants.SEND_TRY_IT_DETAIL_SUCCESS]: sendTryItDetailSuccess,
    [constants.SEND_TRY_IT_DETAIL_ERROR]: sendTryItDetailError,
  },
  initialState
);
