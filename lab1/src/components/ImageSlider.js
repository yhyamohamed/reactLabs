import React, { useState } from "react";
import { Data } from "./Data";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  const dataLenght = Data.length;

  const nextSlide = () => {
    let cur = current === dataLenght - 1 ? dataLenght - 1 : current + 1;
    setCurrent(cur);
  };

  const prevSlide = () => {
    let cur = current === 0 ? 0 : current - 1;
    setCurrent(cur);
  };
  const slideShow = () => {
    let intervID = setInterval(() => {
       setCurrent((current) => current + 1);
    }, 1000);
    setIntervalID(intervID);
  };
  const stopSlideShow = () => {
    clearInterval(intervalID);
  };
  return (
    <div className=" container bg-info">
      <div className="col-10 offset-2 pt-2">
        <img
          className="w-75"
          src={Data[current % dataLenght].image}
          alt="noting "
        />
      </div>
      <div className="col-9 offset-4">
        <button className="btn btn-sm btn-success m-2" onClick={nextSlide}>
          Next
        </button>
        <button className="btn btn-sm btn-primary m-2" onClick={prevSlide}>
          Prev
        </button>
        <button className="btn btn-sm btn-warning m-2" onClick={slideShow}>
          Play
        </button>
        <button className="btn btn-sm btn-danger m-2" onClick={stopSlideShow}>
          stop
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
