import React, { Component } from "react";
import ReactDOM from "react-dom";


const Menu_Items = [{"name":"全部","qty":0},{"name":"待付款","qty":5},{"name":"待出貨","qty":4},{'name':"待收費",'qty':0}] ;
function Gen_Menu_UI(){
  var end = [];
  Menu_Items.forEach(element => {
    var digi_icon = <></>;
    if(element.qty != 0){
      digi_icon = <div className="bg-[#0BADFF] rounded-full w-7 h-7 text-white font-bold text-center ml-2 font-poppins ">{element.qty}</div>
    }
      end.push (<li className="text-[#5F5F5F] text-[18px] list-none font-medium font-poppins hover:opacity-60 cursor-pointer flex flex-row">{element.name}{digi_icon}</li>)
  });
  return end;
}
function shop_Menu_line(props) {
  return (
    <div className={props.className}>
      <div className="flex w-full">
      <div className=""></div>
   
      <div id="shop_menu_line" className=" h-14 w-full flex flex-row justify-between px-20 mx-20 pt-4 ">
      {Gen_Menu_UI()}
        </div>
      
      <div className="w-2/12"></div>
      </div>
    </div>
  );
}

export default shop_Menu_line;
