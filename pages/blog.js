import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Index_Text_Data from "../components/index_text_data.js";
import { Carousel } from "react-responsive-carousel";
import  Shop_Menu_Line  from "../components/shop_menu_line.js";
import  Blog_Box  from "../components/blog_item_box.js";



export default function Home() {
  return (
    <div className="h-full w-full px-20 ml-10">
    
      <div className="mt-20 w-full ">
     
      <div className="w-full flex flex-row mb-20">
        <Blog_Box className="w-3/12 mr-20" img="/img/item_sample.png" title="DHC綜合維他命" created_at="2021-01-01"  creator="明眸教育" desc="你知道嗎?玻尿酸全身都需要!口服玻尿酸吃下後，會到身....." >123</Blog_Box>
        <Blog_Box className="w-3/12 mr-20" img="/img/item_sample.png" title="DHC綜合維他命" created_at="2021-01-01"  creator="明眸教育" desc="你知道嗎?玻尿酸全身都需要!口服玻尿酸吃下後，會到身....." >123</Blog_Box>
        <Blog_Box className="w-3/12 mr-20" img="/img/item_sample.png" title="DHC綜合維他命" created_at="2021-01-01"  creator="明眸教育" desc="你知道嗎?玻尿酸全身都需要!口服玻尿酸吃下後，會到身....." >123</Blog_Box>
        <Blog_Box className="w-3/12 mr-20" img="/img/item_sample.png" title="DHC綜合維他命" created_at="2021-01-01"  creator="明眸教育" desc="你知道嗎?玻尿酸全身都需要!口服玻尿酸吃下後，會到身....." >123</Blog_Box>
        
       
        </div>
        
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
