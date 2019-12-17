// import * as actions from "./index"
import * as actions from "./index";
import axios from "axios";
export function sendTryItDetail(formData) {
  return (dispatch, getState) => {
    dispatch(actions.sendTryItDetailRequest())    
    return new Promise((resolve, reject) => {
      axios.post(
        "https://0pkdsk7a88.execute-api.ap-southeast-1.amazonaws.com/prod/launch-trial",{
          ...formData
        }
      ).then(()=>{
        dispatch(actions.sendTryItDetailSuccess());
      }).catch(()=>{        
        dispatch(actions.sendTryItDetailError('Error Occurs'));
      });
    });
  };
}
