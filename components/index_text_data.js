import React, { Component } from "react";
import ReactDOM from "react-dom";

function index_text_data(props) {
  return (
    <div>
      <div className=" h-screen px-6 pt-32 text-left md:flex-row md:w-screen md:flex md:w-screen md:justify-center md:mt-20">
      
          <div id="text_area" className="md:w-6/12 flex flex-col">
            <h1 className="text-[24px] w-full text-left font-medium">
              {props.title}
            </h1>
            <span className="pt-10 tracking-[0.3rem] pr-4 text-[#9AA9BC]">
              {props.detail}
            </span>
            <span className="pt-10 text-[24px] pl-10  font-medium ">
              了解更多 >
            </span>
          </div>
          <div
            id="img_area"
            className="hidden md:block md:w-3/12 md:float-left"
          >
            <img src={props.pc_img} className=" md:block" />
          </div>
        </div>
     
    </div>
  );
}

export default index_text_data;
