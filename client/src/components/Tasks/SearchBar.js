import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchAction } from '../../actions/Task'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [keywords, setKeyword] = useState('')
    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(searchAction(keywords.toString()))
    }

  return (
    <center className='container mt-3 px-2 pt-2'>
        <input 
        placeholder='search task by title'
        value={keywords}
        onChange={(e) => {
            setKeyword(e.target.value)
            dispatch(searchAction(keywords.toString()))
        }
        }
        ></input>
        <button className='btn btn-success' onClick={searchHandler}>Search</button>
    </center>
  )
}

export default SearchBar