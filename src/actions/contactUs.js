import * as actions from "./index";
import axios from "axios";
export function sendContactDetail(formData) {
  console.log(actions, "mmmmmmmmmmm");
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.post(
        "https://0pkdsk7a88.execute-api.ap-southeast-1.amazonaws.com/prod/contact-us",
        {
          ...formData
        }
      );
      dispatch(actions.sendContactDetailRequest());
    });
  };
}
