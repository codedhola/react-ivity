import React from "react";

const Box = ({ setIsOpen, isOpen, children }) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen &&
        // <ul className="list">
        //   {movies?.map((movie) => (
        //     <li key={movie.imdbID}>
        //       <img src={movie.Poster} alt={`${movie.Title} poster`} />
        //       <h3>{movie.Title}</h3>
        //       <div>
        //         <p>
        //           <span>🗓</span>
        //           <span>{movie.Year}</span>
        //         </p>
        //       </div>
        //     </li>
        //   ))}
        // </ul>
        children}
    </div>
  );
};

export default Box;
