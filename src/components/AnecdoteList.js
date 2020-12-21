import React from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
const handleVote = dote => {
    props.vote(dote)
    props.voteNotification(dote.content, 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {props.dotes.map(dote =>
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

const mapStateToProps = (state) => {
  return {
    dotes: (
      state.dotes
        .filter(dote => dote.content.toLowerCase().includes(state.filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
    )
  }
}

const mapDispatchToProps = {
  vote,
  voteNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)