export const addToProduct= (product)=>{
    return{
        type:'ADD_PRODUCT',
        payload:{
            product:product
        }
    }
}

export const incrementProductBasket=(index)=>{
    return{
        type:'INCREMENT_PRODUCT',
        payload:{
            index:index,
        }
    }
}