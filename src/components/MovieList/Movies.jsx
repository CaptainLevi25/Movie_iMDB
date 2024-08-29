import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Input, Spinner } from "@bigbinary/neetoui";
import { useMovie } from "../../context/MovieContext";
import axios from "axios";

export default function Movies() {
  const [isLoading, setisLoading] = useState(false);
  const { currentMovie, setCurrentMovie } = useMovie();
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState("Please type a query to retrieve relevant result");
  const handleChange = async (e) => {
    try {
      setisLoading(false);
      setError(null);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=e4fc4dee&s=${e.target.value}`
      );

      console.log(response.data);
      if (response.data.Response === "False") {
        if (response.data.Error === "Incorrect IMDb ID.")
          setError("Please type a query to retrieve relevant result");
        else setError(response.data.Error);
      }
      setMovieList(response.data.Search);
    } catch (e) {
      console.log("error in searching", e);
    } finally {
      setisLoading(false);
    }
  };
  console.log(currentMovie);

  return (
    <>
      <div className="w-2/3 h-[100px]">
        <Input className="w-full" onChange={handleChange} />
      </div>

      <div className=" h-[500px] flex flex-wrap overflow-y-scroll gap-12">
        {error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {movieList &&
              movieList.length > 0 &&
              movieList.map((itm) => {
                return <MovieCard info={itm} />;
              })}
          </>
        )}
      </div>
    </>
  );
}
