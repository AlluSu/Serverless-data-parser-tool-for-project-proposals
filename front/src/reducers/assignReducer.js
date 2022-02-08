const reducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_ASSIGNED':
    return state.concat(action.data)
  case 'DEL_ASSIGNED':
    return state.filter(word => word.word !== action.data.word)
  default:
    return state
  }
}

export const setAssignedWord = (word='', category='') => {
  const data = { word, category }
  return {
    type: 'ADD_ASSIGNED',
    data
  }
}

export const unAssignWord = (word='', category='test') => {
  const data = { word, category }
  return {
    type: 'DEL_ASSIGNED',
    data
  }
}


export default reducer
