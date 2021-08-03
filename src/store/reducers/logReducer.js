const initstate={
    contact:[
        {id:'1',title:'hello me',content:'how can i join?'},
        {id:'2',title:'work',content:'how dose it work?'},
        {id:'3',title:'resume',content:'we didnt send it'},
    ]
}

const logReducer=(state=initstate,action)=>{
    switch (action.type){
        case 'LOGGED':
            return state;
        default:
            return state
    }
}

export default logReducer