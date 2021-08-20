import axios from "axios";

export const SignIn = (creds) => {
  return async (dispatch, getState) => {
    

    try{
        const res = await axios.post("https://workplace.nextsignalz.com/Firebase/SignUp", creds)
        dispatch( {
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        })
        console.log(res.data)
    }
    catch(e){
        dispatch({ type: "LOGIN_ERROR", e });
    }

  };
};
