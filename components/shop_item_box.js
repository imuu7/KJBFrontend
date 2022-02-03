import React, { Component } from "react";
import ReactDOM from "react-dom";

import Image from "next/image";
function show_item_box(props) {
  var has_point = <></>;
  if(props.point != undefined) {
    has_point = `送紅利點數${props.point}點`
  }
  var img_info = <></>
  if(props.img!= undefined) {
    img_info = <Image src={props.img} width="207" height="170" />
  }

  return (
    <div className={`${props.className} item_box`}>
      <div className="item_empty_bg w-full h-40">
        {img_info}
      </div>
      <div className="item_box_detail_bg h-20 w-full flex flex-col font-poppins px-2 py-2 font-bold mt-5">
        <h3>{props.title}</h3>


        <div className="flex flex-row mt-3">
          <span className="w-4/12">$ {props.money}元</span>
          <span className="w-full text-right text-[#0BADFF]">
              {has_point}
          </span>
        </div>


      </div>
    </div>
  );
}

export default show_item_box;
