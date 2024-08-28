import React from 'react'
import { useMovie } from '../../context/MovieContext';

export default function HistoryCard({info}) {
  const {currentMovie, setCurrentMovie} =  useMovie();
  const handleClick = ()=> {
    setCurrentMovie(info.imdbID);

  }


  console.log("from history card" , currentMovie);
  return (
    <div className=' bg-slate-600 h-8 flex justify-center items-center w-full p-2 rounded-xl text-white cursor-pointer' onClick={handleClick} 
      style={{background: String(info.imdbID) === String(currentMovie) && "purple"}}
    > 
            {info.Title}
     </div>
  )
}
