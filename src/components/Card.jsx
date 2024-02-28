import React from "react";
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Card = ({ src, url, title }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${url}`);
    };

    return (
        <div className="float-left ml-10 text-center w-[30%] p-3" onClick={handleClick}>
            <img  className="w-[90px] m-auto" src={src} alt="" />
            <h3 className="font-bold">{title}</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit itaque expedita corporis nemo ad ea sequi!
            </p>
        </div>
    )
}
export default Card;