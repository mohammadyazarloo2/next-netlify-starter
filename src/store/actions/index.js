export const addToProduct= (product)=>{
    return{
        type:'ADD_PRODUCT',
        payload:{
            product:product
        }
    }
}