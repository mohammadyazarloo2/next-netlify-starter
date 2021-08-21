import axios from "axios";

export const SignIn = (creds) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(
        "https://workplace.nextsignalz.com/Firebase/SignIn",
        creds
      );
      if(!res.data.error){
        dispatch({
          type: "LOGIN_SUCCESS",
          payload:res.data,
        });
        
      }else{
        dispatch({
          type: "ERROR_LOG",
        });
      }
        
    } catch (e) {
      dispatch({ type: "LOGIN_ERROR", e });
    }
  };
};
