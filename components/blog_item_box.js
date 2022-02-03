import React, { Component } from "react";
import ReactDOM from "react-dom";

import Image from "next/image";
function blog_item_box(props) {

  var img_info = <></>
  if(props.img!= undefined) {
    img_info = <Image src={props.img} width="387" height="290" />
  }

  return (
    <div className={`${props.className} blog_box rounded-t-lg flex flex-col h-full bg-white`}>
      <div className=" w-full ">
        {img_info}
      </div>
      <div className=" w-full flex flex-col font-poppins px-2 py-2 font-bold mt-5">
        <span className="text-[#B0B0B0]">
          <label>{props.creator}</label>
          <label className="px-3">|</label>
          <label>{props.created_at}</label>
        </span>
        <h1 className="text-[#7F7F7F] text-[24px] tracking-widest">{props.title}</h1>
        <h2 className="text-[#7F7F7F] text-[14px] tracking-widest">{props.desc}</h2>


        <div className="flex flex-row mt-3">
          <span className="w-full text-center text-[#39BCFE]">READ MORE</span>
         
        </div>


      </div>
    </div>
  );
}

export default blog_item_box;
