import React from 'react'
import '../App.css'
import { useContext } from 'react'
import MovieContext from '../Context/MovieDetails/MovieContext'
import { Link } from 'react-router-dom'

export default function Details() {
  const a = useContext(MovieContext);
  return (
    <>
      <div className='details'>
          <h1 className='details_moviename'>{a[0].name}({a[0].threatre}) - {a[0].language}</h1>
          <h2 className='details_movieprice'>Ticket Price: {a[0].price}</h2>
      </div>
      <div className='details_buttons'>
          <Link to='/book' className='link'><button className='details_button'>Book Seats</button></Link>
          <button className='details_button'>Customize Seats</button>
      </div>
    </>
  )
}
