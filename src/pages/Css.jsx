import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../assets/css.png";
import '../index.css';

const Css = () => {
  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col m-[20px]">
      <img src={css} alt="" />
      <h3 className="m-[20px] font-bold">CSS3 Styling</h3>
      <p className="m-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptates voluptas similique qui ipsa sunt aliquam? Quos minima
        voluptatibus illo
      </p>
      <p className="m-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptates voluptas similique qui ipsa sunt aliquam? Quos minima
        voluptatibus illo
      </p>
      <button className="h-[38px] bg-red-500 hover:bg-red-700 border-0 px-5 text-[#ffffff]" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Css;