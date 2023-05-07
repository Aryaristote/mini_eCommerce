export const updateItem = (state, payload) => {
    const index = state.items.findIndex(item => item.id === payload.id)
    if (index !== -1) {
        state.index.splice(index, 1, payload)
    }
}

  