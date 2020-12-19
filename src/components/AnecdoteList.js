import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      {dotes.map(dote =>
        <div key={dote.id}>
          <div>
            {dote.content}
          </div>
          <div>
            has {dote.votes}
            <button onClick={() => dispatch(vote(dote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList