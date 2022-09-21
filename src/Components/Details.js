import React from 'react'
import '../App.css'
import { useContext } from 'react'
import MovieContext from '../Context/MovieDetails/MovieContext'

export default function Details() {
  const a = useContext(MovieContext);
  return (
    <>
      <div className='details'>
          <h1 className='details_moviename'>{a.name}({a.threatre}) - {a.language}</h1>
          <h2 className='details_movieprice'>Ticket Price: {a.price}</h2>
      </div>
      <div className='details_buttons'>
          <button className='details_button'>Book Seats</button>
          <button className='details_button'>Customize Seats</button>
      </div>
    </>
  )
}
