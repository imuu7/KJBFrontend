import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Inputer from '../components/inputer'


const sample_list = [
    { 'name': "account", 'placeholder': "帳號", "input_type": "text" },
    { 'name': "password", 'placeholder': "密碼", "input_type": "password" },
];

function Input_UI_Fn() {
    var end = [];
    sample_list.forEach(element => {
      var ui = (
        <Inputer placeholder={element['placeholder']} className="pb-10" input_type={element['input_type']} ></Inputer>
      )
      end.push(ui);
    });
  
    return end;
}

function Point_UI_Fn() {
    var point_item = [];
    for (let index = 0; index < 7; index++) {
        var poin = (
            <div className=""><Image src="/img/btn_2.png" width={6} height={6} /></div>
        )
        point_item.push(poin);
    }
  
    return point_item;
}

export default function Login() {
  return (
    <div className="h-full flex flex-row justify-around">
        <div className="h-full min-w-max"></div>
        <div className="h-full min-w-max flex flex-col items-center justify-center">
            <div className="text-2xl font-bold my-3">登入</div>
            <div className="h-10 my-3 flex flex-row items-center justify-center">
                <input className="w-5" type="radio" value="member" name="role" /> 會員
                <input className="w-5 ml-8" type="radio" value="store" name="role" /> 經銷商
            </div>
            <div className="mt-5">
                {Input_UI_Fn()}
            </div>
            <div className="w-full flex flex-row justify-between">
                <div className="text-white text-center">
                    <button className="h-9 w-full px-7 rounded-[16px] text-base bg-[#C4C4C4] font-bold">註冊</button>
                </div>
                <div className="text-white text-center">
                    <button className="h-9 w-full px-7 rounded-[16px] text-base bg-[#0071E3] font-bold">登入</button>
                </div>
            </div>
        </div>
        <div className="h-full min-w-max flex flex-col justify-center items-center">
            {Point_UI_Fn()}
        </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
