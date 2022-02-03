import Menu from "../components/menu.js";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { asPath, pathname } = useRouter();
  const layout_color = {};
  var slide_line = <></>;
  var inside_class = ""; 
  // console.log(pathname)
  if(pathname != "/"){
    slide_line = ( <div className="absolute left-20 hidden md:block">
    <Image src="/img/side_line_img.png" height="734" width="30" />
    </div>);
inside_class = "md:pl-60"; 
  }

  return (
    <div className="h-screen bg-[#F6F8F9]">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
        rel="stylesheet"
      />
      <div id="ceneter_icon" className="absolute hidden md:block top-10 z-20 w-screen">
        <div className="flex justify-center">
          <img src="/img/center_icon.png" />
        </div>
      </div>
      <div className="flex px-6 pt-6 absolute w-screen top-0 z-20">
        <div className="w-11/12 h-10 md:h-20">
          <img src="/img/logo.png" className="h-full" />
        </div>
        <Menu></Menu>
     
      </div>
      <main className={`w-full md:pt-32 ${inside_class}`} style={{ height: "95%" }}>
       {slide_line}
        {children}
      </main>
    </div>
  );
}
