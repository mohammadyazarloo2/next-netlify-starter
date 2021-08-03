export const createContact=(contact)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('contact').add({...contact}).then(()=>{
            dispatch({type:'CREATE_CONTACT',contact})
        }).catch((err)=>{
            dispatch({type:'CREATE_CONTACT_ERROR',err})
        })
        
    }
}