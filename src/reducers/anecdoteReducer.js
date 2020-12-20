const dotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (dote) => {
  return {
    content: dote,
    id: getId(),
    votes: 0
  }
}

const initialState = dotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_DOTE':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id
      const doteToChange = state.find(n => n.id === id)
      const changedDote = { 
        ...doteToChange, 
        votes: doteToChange.votes +1
      }
      return state.map(a =>
        a.id !== changedDote.id ? a : changedDote
      )
    default:
      return state
  }

}

export const createDote = (content) => {
  return {
      type: 'NEW_DOTE',
      data: {
      content,
      votes: 0,
      id: getId()
      }
  }
}

export const vote = id => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default anecdoteReducer