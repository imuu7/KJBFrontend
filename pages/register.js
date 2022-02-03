import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const member_input_list = [
    { 'name': "account", 'text': "帳號", "input_type": "text" },
    { 'name': "password", 'text': "密碼", "input_type": "password" },
    { 'name': "pwd_check", 'text': "密碼確認", "input_type": "password" },
    { 'name': "email", 'text': "電子郵件", "input_type": "text" },
    { 'name': "phone", 'text': "手機號碼", "input_type": "text" },
];

const store_input_list = [
    { 'name': "r_id", 'text': "推薦人ID", "input_type": "text" },
    { 'name': "name", 'text': "中文全名", "input_type": "text" },
    { 'name': "account", 'text': "帳號", "input_type": "text" },
    { 'name': "password", 'text': "密碼", "input_type": "password" },
    { 'name': "pwd_check", 'text': "密碼確認", "input_type": "password" },
    { 'name': "email", 'text': "電子郵件", "input_type": "text" },
    { 'name': "phone", 'text': "手機號碼", "input_type": "text" },
];

function Input_UI_Fn(input_list) {
    var end = [];
    input_list.forEach(element => {
        var ui = (
            <div className="flex flex-row justify-between pb-5">
                {element['text']}
                <div className="border border-black rounded-[8px] ml-3">
                    <input className="hover:border-0 hover:outline-0 active:outline-0 text-black bg-transparent text-sm w-full py-[5px] px-[18px]" type={element['input_type']} />
                </div>
            </div>
        )
        end.push(ui);

        if (element['name'] == 'pwd_check' || element['name'] == 'name') {
            end.push(<div className="border border-[#DDDDDD] mt-2 mb-7"></div>);
        }
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

export default function Register() {

    const [role, setRole] = useState('member');
    var Input_UI = <></>;

    if (role == 'member') {
        Input_UI = Input_UI_Fn(member_input_list);
    } else if (role == 'store') {
        Input_UI = Input_UI_Fn(store_input_list);
    }

    return (
        <div className="h-full flex flex-row justify-around">
            <div className="h-full min-w-max"></div>
            <div className="h-full min-w-max flex flex-col items-center justify-center">
                <div className="flex flex-row my-3">
                    <div className="text-2xl font-bold ml-20 mr-3">註冊</div>
                    <div className="flex flex-row items-center text-xs">
                        語言：
                        <select name="lang" id="lang">
                            <option value="zh-tw">中</option>
                            <option value="en">EN</option>
                            <option value="zh-cn">简</option>
                        </select>
                    </div>
                </div>
                <div className="h-10 my-3 flex flex-row items-center justify-center">
                    <input className="w-5" type="radio" value="member" name="role" checked={(role == 'member') ? 'checked' : ''} onChange={() => setRole('member')} /> 會員
                    <input className="w-5 ml-8" type="radio" value="store" name="role" checked={(role == 'store') ? 'checked' : ''} onChange={() => setRole('store')} /> 經銷商
                </div>
                <div className="mt-5">
                    {Input_UI}
                </div>
                <div className="flex items-center text-xs">
                    <input className="mr-1" type="checkbox" value="male" />我了解<a className="text-[#0071E3]" href='#'>系統同意書</a>並同意條款
                </div>
                <div className="w-full flex flex-row justify-center mt-10">
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

Register.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
