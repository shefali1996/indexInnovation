import * as actions from "./index";
import axios from "axios";
export function sendTryItDetail(formData) {
  console.log(actions, "mmmmmmmmmmm");
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.post(
        "https://0pkdsk7a88.execute-api.ap-southeast-1.amazonaws.com/prod/launch-trial",{
          ...formData
        }
      );
      dispatch(actions.sendContactDetailRequest());
    });
  };
}
