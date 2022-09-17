export default configureStore({
  reducer: {
    login: userReducer,
    carrinho: carrinhoSlice
  }
})