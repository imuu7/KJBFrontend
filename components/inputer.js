import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Page(props) {

    // var tail_icon = <></>
    // if(props.input_type == "password"){
    //     tail_icon = <FontAwesomeIcon icon="eye" className="pr-2  text-no-focus-white  text-2xl" />
    // }

    return (
        <div className={props.className}>

            <div className="input_element border border-black rounded-[16px]">
              
                {/* <FontAwesomeIcon icon={props.icon_name} className="pr-2  text-black  text-3xl" /> */}

                <input type={props.input_type}
                className="hover:border-0 hover:outline-0 active:outline-0 text-black bg-transparent text-sm w-full py-[7px] px-[18px]"
                placeholder={props.placeholder} 
                // onTextChange={props.onTextChange}
                />

                {/* {tail_icon} */}
                
            </div>

        </div>
    )
}