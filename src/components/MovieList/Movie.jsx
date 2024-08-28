import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { useMovie } from '../../context/MovieContext';
import axios from 'axios';
import { Spinner } from '@bigbinary/neetoui';

export default function Movie() {
  const [isLoading,setisLoading] = useState(false);
  const { currentMovie, setCurrentMovie } = useMovie();
  const [extrainfo,setExtrainfo] = useState(null);
  const fetch = async()=>{
    
    try{
      setisLoading(true);
      const response = await axios.get(`http://www.omdbapi.com/?apikey=e4fc4dee&i=${currentMovie}`)
      console.log(response.data);
      setExtrainfo(response.data);
    }catch(e){
      console.log("error from Movie" ,e);
    }finally{
      setisLoading(false);
    }
  }
  useEffect(()=>{
      fetch();
  },[currentMovie])
  if(isLoading === true) return (<Spinner/>)
  if(currentMovie === null && isLoading === false) return (
    <h2>please select a movie from search result to see details</h2>
  )
  return (
      <MovieCard extrainfo = {extrainfo}/>
  )
}
