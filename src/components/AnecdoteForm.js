import React from 'react'
import { connect } from 'react-redux'
import { createDote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const addDote = async (e) => {
    e.preventDefault()
    const content = e.target.dote.value
    e.target.dote.value = ''
    props.createDote(content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addDote}>
        <div><input name="dote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(
  null, 
  { createDote }
)(AnecdoteForm)