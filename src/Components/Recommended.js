import React from 'react'
import '../App.css'
import MovieContext from '../Context/MovieDetails/MovieContext'
import { useContext } from 'react'

export default function Recommended() {
    const details = useContext(MovieContext);
  return (
    <div className='recommended'>
        <div className='recommendText'>Recommended Movies</div>
        <div className='cards'>
          <div className='card'>
            <div>
              <span>{details[0].name}</span>
              <span>({details[0].threatre})</span>
            </div>
            <div>{details[0].language}</div>
          </div>
          <div className='card'>
            <div>
              <span>{details[1].name}</span>
              <span>({details[1].threatre})</span>
            </div>
            <div>{details[1].language}</div>
          </div>
          <div className='card'>
            <div>
              <span>{details[2].name}</span>
              <span>({details[2].threatre})</span>
            </div>
            <div>{details[2].language}</div>
          </div>
          <div className='card'>
            <div>
              <span>{details[3].name}</span>
              <span>({details[3].threatre})</span>
            </div>
            <div>{details[3].language}</div>
          </div>
          <div className='card'>
            <div>
              <span>{details[4].name}</span>
              <span>({details[4].threatre})</span>
            </div>
            <div>{details[4].language}</div>
          </div>
          
        </div>
      </div>
  )
}
