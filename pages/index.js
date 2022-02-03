import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Index_Text_Data from "../components/index_text_data.js";
import { Carousel } from "react-responsive-carousel";

const sample_detail = `青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。

青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。`;

export default function Home() {
  return (
    <div className="h-full">
      <Carousel
        axis="vertical"
        showThumbs={false}
        className="h-full md:-mt-32"
        showArrows={false}
      >
        <div className="">
        <div className="h-screen  bg-[url('/img/pc_mask.jpg')] hidden bg-no-repeat bg-cover flex-col justify-center md:flex ">
        <h1 className="text-center text-[#5F5F5F] text-[64px] font-NotoSans tracking-[0.2em] font-normal w-full">
                  經銷商行銷活動
                </h1>
                <div className="flex flex-row justify-center">
                <div className="w-3/12 ">
                <img src="/img/see_more_pc.png" className="w-full" />
                </div>
                </div>
          </div>



          <div className="h-screen md:bg-[url('/img/tree.png')] bg-no-repeat bg-cover md:hidden">
            <div className="h-full bg-[url('/img/mask.png')] bg-no-repeat bg-cover">
              <div className="flex h-full justify-center flex-col">
                <h1 className="text-center text-[#5F5F5F] text-[30px] font-NotoSans tracking-[0.2em] font-normal ">
                  經銷商
                  <br />
                  行銷活動
                </h1>
                <img src="/img/see_more.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen">
          <Index_Text_Data
            title="公司行銷活動"
            detail={sample_detail}
            pc_img={"/img/build.png"}
          ></Index_Text_Data>
        </div>
      </Carousel>

    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
