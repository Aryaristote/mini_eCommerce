export const getItemById = state => id => {
    return state.products.find(item => item.id === id)
}

  