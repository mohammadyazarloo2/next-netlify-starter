const initstate={
    isLogged:false
}

const logReducer=(state=initstate,action)=>{
    switch (action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log(state)
            return {
                ...state,
                authError:'success',
                isLogged:true,
            };
        case 'CHECK_LOGIN':
            return{
                ...state,
            }
            
        default:
            return state
    }
}

export default logReducer