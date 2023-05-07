import { getItemById } from "./getters"
// import { updateItem } from "./mutations"

export const updateItemAction = ({ state, commit }, payload) => {
  const item = getItemById(state)(payload.id)
  const updatedItem = { ...item, ...payload }
  commit("updateItem", updatedItem)
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity})
}
  