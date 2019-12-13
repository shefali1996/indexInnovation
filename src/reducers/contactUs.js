import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../actions/constants";

const initialState = {
  contactData: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
  },

};

const sendContactDetailRequest = (state, action) =>
  update(state, {
    contactData: {
      isLoading: { $set: true },
      isError: { $set: false },
      isSuccess: { $set: false },
      message: { $set: "" }
    }
  });
const sendContactDetailSuccess = (state, action) =>
  update(state, {
    metricsData: {
      data: { $set: action.payload },
      isLoading: { $set: false },
      isError: { $set: false },
      isSuccess: { $set: true },
      message: { $set: "" }
    }
  });

  const sendContactDetailError = (state, action) =>
  update(state, {
    metricsData: {
      data: { $set: action.payload },
      isLoading: { $set: false },
      isError: { $set: false },
      isSuccess: { $set: true },
      message: { $set: "" }
    }
  })

export default handleActions(
  {
    [constants.SEND_CONTACT_DETAIL_REQUEST]: sendContactDetailRequest,
    [constants.SEND_CONTACT_DETAIL_SUCCESS]: sendContactDetailSuccess,
    [constants.SEND_CONTACT_DETAIL_ERROR]: sendContactDetailError,
  },
  initialState
);
