import React from "react";

export default function Button({border_clr = "#3c3c43",bcr = "transparent",text_clr,text = "جدید"}){
    
    return (
        <button
            className={`px-3 py-1 !border !rounded-sm `}
            style={{
                boxShadow: `0px 0px 0px 0px !${border_clr}`,
                backgroundColor: bcr,
                color: text_clr,
                border:"0px"
            }}
        >
            {text}
        </button>
    );
}
