import React from 'react'
import { useDispatch } from 'react-redux'
import { createDote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addDote = async (e) => {
    e.preventDefault()
    const content = e.target.dote.value
    e.target.dote.value = ''
    dispatch(createDote(content))
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

export default AnecdoteForm
