import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const FirstPage = () => {
  return (
    <div className="container ">
      <div className="flex-none md:flex items-center  md:mt-20">
        <div className="w-full md:w-1/2 ">
          <img className="w-full h-auto" src="/images/cube-six.png" alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <h1>DICE GAME</h1>
            <Link to="/second-page">
              <button className="border-2 px-12 py-2 bg-black text-white mt-5 w-fit ml-32">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
