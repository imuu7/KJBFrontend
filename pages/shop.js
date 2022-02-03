import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Index_Text_Data from "../components/index_text_data.js";
import { Carousel } from "react-responsive-carousel";
import  Shop_Menu_Line  from "../components/shop_menu_line.js";
import  Show_Item_Box  from "../components/shop_item_box.js";



export default function Home() {
  return (
    <div className="h-full w-full px-20 ml-10">
      <Shop_Menu_Line className="w-full" />
      <div className="mt-20 w-full ">
        <h1 className="text-[30px] font-medium font-poppins mb-10">待付款</h1>
        
        <div className="w-full h-64 flex flex-row">
        <Show_Item_Box className="w-2/12 mr-3" img="/img/item_sample.png" title="DHC綜合維他命" money="500" point="123">123</Show_Item_Box>
        <Show_Item_Box className="w-2/12 mr-3" title="DHC綜合維他命" money="500" point="123">123</Show_Item_Box>
        <Show_Item_Box className="w-2/12 mr-3" title="DHC綜合維他命" money="500" point="123">123</Show_Item_Box>
        <Show_Item_Box className="w-2/12 mr-3" title="DHC綜合維他命" money="500" point="123">123</Show_Item_Box>
        <Show_Item_Box className="w-2/12 mr-3" title="DHC綜合維他命" money="500" point="123">123</Show_Item_Box>
        
        </div>
        
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
