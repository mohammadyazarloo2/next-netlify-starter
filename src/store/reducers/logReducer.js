const initstate = {
  isLogged: false,
};

const logReducer = (state = initstate, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      authError: "success",
      isLogged: true,
      token:action.payload
    };
  } else if(action.type === "ERROR_LOG")
  {
    return {
      ...state,
      authError: "fail",
      isLogged: false,
    };
  }else{
    return state;
  }
  
};

export default logReducer;
