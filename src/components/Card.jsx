import React from "react";

const Card = ({ type = "default", movie, index }) => {
  return (
    <div className="card text-white group">
      <div className="relative">
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
              : "/empty.jpg"
          }
          alt={movie?.title}
          className="w-full  rounded-2xl object-fit h-full"
        />
        {type === "trend" && (
          <div className="absolute top-0 bottom-0 right-0 left-0 duration-300 ease-in-out group-hover:bg-black/50 bg-transparent flex items-center justify-center">
            <h3 className="font-api-primary opacity-0 -translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 delay-100 duration-300 ease-in-out font-bold text-2xl">
              TOP {index}
            </h3>
          </div>
        )}
      </div>
      <h5 className=" font-bold font-api-primary mt-3">{movie?.title}</h5>
      <div className="flex gap-2 mt-2 text-sm">
        <p>
          <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
          {movie?.vote_average ? movie?.vote_average.toFixed(1) : "N/A"}
        </p>
        <p>•</p>
        <p>{movie?.original_language}</p>
        <p>•</p>
        <p>{movie?.release_date ? movie?.release_date.split("-")[0] : "N/A"}</p>
      </div>
    </div>
  );
};

export default Card;
