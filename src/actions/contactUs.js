import * as actions from "./index";
import axios from "axios";
export function sendContactDetail(formData) {
  return (dispatch, getState) => {

    dispatch(actions.sendContactDetailRequest());
    return new Promise((resolve, reject) => {
      axios.post(
        "https://0pkdsk7a88.execute-api.ap-southeast-1.amazonaws.com/prod/contact-us",
        {
          ...formData
        }
      ).then((data)=>{
        console.log('333333',data);
        
        dispatch(actions.sendContactDetailSuccess(data));
      }).catch((data)=>{
        console.log(data,'8888888888');
        
        dispatch(actions.sendContactDetailError('ERROR OCCURS'));
      })
    });
  };
}
