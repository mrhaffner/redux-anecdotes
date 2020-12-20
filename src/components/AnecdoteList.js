import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './Filter'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dotes = useSelector(({ filter, dotes }) => {
    return dotes
      .filter(dote => dote.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
  })
  
  const dispatch = useDispatch()
  const handleVote = (id, content) => {
    dispatch(vote(id))
    dispatch(voteNotification(content))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
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
            <button onClick={() => handleVote(dote.id, dote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList