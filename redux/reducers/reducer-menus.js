const reducermenus = (state = [], action) => {
  switch (action.type) {
    case 'data_menus': {
      return {
        ...state,
        list: action.data,
      }
    }
    default:
      return state
  }
}

export default reducermenus
