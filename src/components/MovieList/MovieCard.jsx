import React from "react";
import { useMovie } from "../../context/MovieContext";

export default function MovieCard({ info, extrainfo }) {
  const { currentMovie, setCurrentMovie , history , setHistory} = useMovie();
  const handleClick = () => {
    if (!info) return;
    setCurrentMovie(info.imdbID);
    if (!history.includes(info)) {
      setHistory([...history , info]);
    }
  
    console.log(info.imdbID)
  };

  
  if (extrainfo) {
    return (
      <div
        className="flex flex-col min-h-72 w-48 items-center cursor-pointer gap-1"
        onClick={handleClick}
      >
        <img src={extrainfo && extrainfo.Poster} alt="" className="h-[90%]" />
        <h5 className="h-[10%]">{extrainfo && extrainfo.Title}</h5>
        <h5 className="h-[10%]"> {extrainfo &&  extrainfo?.Language?.split(',')[0]}</h5>
        <h5 className="h-[10%]"> {extrainfo &&  extrainfo?.Type}</h5>
        <h5 className="h-[10%]"> {extrainfo &&  extrainfo?.Year}</h5>
      </div>
    );
  }  
  return (
    <div
      className="flex flex-col h-72 w-48 items-center cursor-pointer"
      onClick={handleClick}
    >
      <img src={info && info.Poster} alt="" className="h-[90%]" />
      <h5 className="h-[10%]">{info && info.Title}</h5>
    </div>
  );
}
