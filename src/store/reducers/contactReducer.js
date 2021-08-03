const initstate={
    contact:[
        {id:'1',title:'hello me',content:'how can i join?'},
        {id:'2',title:'work',content:'how dose it work?'},
        {id:'3',title:'resume',content:'we didnt send it'},
    ]
}

const contactReducer=(state=initstate,action)=>{
    switch(action.type){
        case 'CREATE_CONTACT':
            console.log('contact created',action.contact)
            return state
        case 'CREATE_CONTACT_ERROR':
            console.log('contact created error',action.err)
            return state
        default:
            return state
    }
}

export default contactReducer