import React, { Component,useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";

function gen_menu_lists() {
  var end = [];
  var items = ["首頁", "購物商城", "紅利優惠", "健康生活", "FB活動"];
  var links = {"購物商城":"/shop","健康生活":"/blog"}
  var n = 0;
  items.forEach((element) => {
    var is_active = false;
    if (n == 0) {
      is_active = true;
    }
    var active_class = "hover:text-black";
    if (is_active) {
      active_class = "menu-active";
    }
    var class_str =
      "list-none font-bold cursor-pointer pb-4	text-[#C4C4C4] " + active_class;
    var element_link = "/#";
    if(links.hasOwnProperty(element)) {
      element_link = links[element];
    }
    var pack = (
      <li className={class_str}>
        <span className="pr-3 arrow ">.</span>
        <Link href={element_link}>{element}</Link>
      </li>
    );
    end.push(pack);

    n++;
  });
  return     <ul>
  {end}
   </ul>;
}

function Menu() {

  const [show_menu,setShow_Menu] = useState(false);
  var menu_items = <></>
  var bg_class = "";
  if(show_menu ){
      menu_items = gen_menu_lists();
      bg_class = "bg-white/30 backdrop-blur-xl";
  }
  return (
    <div
      id="menu_bg"
      className={`w-full  md:w-1/12  rounded-md	 min-h-fit  p-3 font-poppins text-xl tracking-widest pl-8 pt-4 hover:opacity-60 cursor-pointer  ${bg_class}`} >
        
         <div className="w-2/12  pb-4 items-end justify-end flex float-right">
          <Image src="/img/menu_icon.png" width={33} height={15} className="w-full" onClick={()=>{ setShow_Menu(!show_menu);}}  />
        </div>
    {menu_items}
    </div>
  );
}

export default Menu;
