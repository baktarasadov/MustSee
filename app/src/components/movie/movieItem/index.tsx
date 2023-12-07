import React from "react";
import { IMovieItemProps } from "../../../types/movie/IMovieItemProps";
import Button from "../../UI/button";

const MovieItem: React.FC<IMovieItemProps> = ({ src, title }) => {
  return (
    <>
      <div className="bg-[#FFC7C7] p-5 w-8/12">
        <div className="flex gap-5">
          <div className="w-[410px] h-[230px]">
            <img className="w-full h-full" src={src} alt={title} />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[black]">{title}</h2>
            <Button className="w-[100px] bg-[red] text-base text-white">
              Add Lists
            </Button>
            <Button className="w-[100px] bg-[red] text-base text-white">
              Details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
