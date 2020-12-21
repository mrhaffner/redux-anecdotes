import doteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch(action.type) {
    case 'INIT_DOTES':
      return action.data
    case 'NEW_DOTE':
      return [...state, action.data]
    case 'VOTE':
      const { data } = action
      // const id = action.data.id
      // const doteToChange = state.find(n => n.id === id)
      // const changedDote = { 
      //   ...doteToChange, 
      //   votes: doteToChange.votes +1
      // }
      return state.map(a =>
        a.id !== data.id ? a : data
      )
    default:
      return state
  }

}

export const initializeDotes = () => {
  return async dispatch => {
    const dotes = await doteService.getAll()
    // console.log(dotes)
    dispatch({
      type: 'INIT_DOTES',
      data: dotes,
    })
  }
}

export const createDote = content => {
  return async dispatch => {
    const dote = {
      content,
      votes: 0
      }
    const newDote = await doteService.createNew(dote)
    dispatch({
      type: 'NEW_DOTE',
      data: newDote
    })
  }
}

// export const vote = id => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

export const vote = object => {
  object = { ...object, votes: object.votes + 1}
  return async dispatch => {
    const newObject = await doteService.vote(object) 
    dispatch({
      type: 'VOTE',
      data: newObject
    }) 
  }
}

export default anecdoteReducer