import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './Filter'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dotes = useSelector(({ filter, dotes }) => {
    return dotes
      .filter(dote => dote.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
  })
  
  const dispatch = useDispatch()
  const handleVote = dote => {
    console.log(dote)
    dispatch(vote(dote))
    dispatch(voteNotification(dote.content, 5000))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {dotes.map(dote =>
        <div key={dote.id}>
          <div>
            {dote.content}
          </div>
          <div>
            has {dote.votes}
            <button onClick={() => handleVote(dote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList