import React, { useEffect, useRef, useState } from "react";
import HistoryCard from "./HistoryCard";
import { useMovie } from "../../context/MovieContext";

export default function History() {
  const {currentMovie,  history, setHistory } = useMovie();

  const scrollableDivRef = useRef(null);

  const scrollToElement = (id) => {
    if (scrollableDivRef.current) {
      const element = scrollableDivRef.current.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        console.log("lunderea")
      }
    }
  };
  useEffect(() => {
    const currentMovieId = currentMovie; // Optional chaining for safety
    if (history.length > 0 && currentMovieId) {
      if (history.some((movie) => movie.imdbID == currentMovieId)) {
        scrollToElement(currentMovieId);
        console.log("helo")
      }
    }
  }, [currentMovie]);
  return (
    <>
      <div className="flex flex-col gap-1 items-center w-full overflow-y-scroll">
        <h3>History</h3>
      </div>
      <div className=" h-[100%] flex flex-col gap-5 items-center w-full overflow-y-scroll p-5" ref={scrollableDivRef}>
        {history.length > 0 &&
          history.map((itm) => {
            return (
              <div key={itm.imdbID} className="w-full" id={itm.imdbID}>
                {" "}
                <HistoryCard info={itm} />{" "}
              </div>
            );
          })}
      </div>
    </>
  );
}
