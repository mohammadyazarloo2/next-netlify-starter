let initializeState = {
    basket_items:[],
    basket_items_id:[],
}

export default (state = initializeState, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      basket_items: [...state.basket_items, {...action.payload.product,count:1}],
      basket_items_id: [...state.basket_items_id, action.payload.product.id],
    };
  }
  return state;
};
