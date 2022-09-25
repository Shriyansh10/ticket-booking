import React from 'react'
import MovieContext from '../Context/MovieDetails/MovieContext'
import { useContext } from 'react'
import '../App'

export default function Booking_Tickets(){
    const details = useContext(MovieContext);
    const rows = 20;
    const cols = 10;
    let seat_map = new Array(cols);
    for(let i=0;i<cols;i++){
        seat_map[i] = [];
    }
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            seat_map[i][j] = j+1;
        }
    }
    // console.log(details[0]);
    return (
      <div>
        <h1 className='booking_movietext'>{details[0].name}({details[0].threatre})</h1>
        <div className='seats'>
            {seat_map.map((num)=>{
                return <div className='rows'> {num.map((number)=>{
                    return <div className='seat'>{number}</div>
                })}</div>
            })}
        </div>
      </div>
    )
}
