import React from 'react'
import '../App.css'

export default function Recommended() {
    const mystyle ={
        
    }
  return (
    <div className='recommended'>
        <div className='recommendText'>Recommended Movies</div>
        <div className='cards'>
          <div className='card'>
            <div>
              <span>Avengers: Endgame</span>
              <span>(INOX)</span>
            </div>
            <div>English</div>
          </div>
          <div className='card'>
            <div>
              <span>URI: The Surgical Strike</span>
              <span>(PVR)</span>
            </div>
            <div>Hindi</div>
          </div>
          <div className='card'>
            <div>
              <span>KGF: Chapter 1</span>
              <span>(CinePolis)</span>
            </div>
            <div>Kannada</div>
          </div>
          <div className='card'>
            <div>
              <span>Master</span>
              <span>(PVR)</span>
            </div>
            <div>Tamil</div>
          </div>
          <div className='card'>
            <div>
              <span>Bahubali: The Beginning</span>
              <span>(INOX)</span>
            </div>
            <div>Telugu</div>
          </div>
        </div>
      </div>
  )
}
