export const updateItem = (state, payload) => {
    const index = state.items.findIndex(item => item.id === payload.id)
    if (index !== -1) {
        state.index.splice(index, 1, payload)
    }
}


export const ADD_TO_CART = (state, { product, quantity }) => {
    let productExistInCart = state.cart.find(item => {
        return item.product.id === product.id;
    })
    if (productExistInCart) {
        productExistInCart.quantity += quantity;
        return;
    } else {
        state.cart.push({
            product,
            quantity
        })
    }
}
  