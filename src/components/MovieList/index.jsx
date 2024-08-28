import axios from "axios";
import React, { useEffect } from "react";
import Movies from "./Movies";
import Movie from "./Movie";
import History from "./History";

export default function MovieList() {
  
  return (
    <div className="w-[100vw] h-screen overflow-hidden flex">
      <div className="h-screen w-2/3  flex flex-col p-10 items-center justify-center">
        <Movies />
      </div>
      <div className="flex-col h-screen w-1/3 border-l-4">
      <div className="w-full h-[60%]  flex justify-center items-center border-b-4">
          <Movie/>
      </div>
      <div className="w-full h-[40%]  flex-col gap-3"> 
          <History/>
      </div>
      </div>
    </div>
  );
}
