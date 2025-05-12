import React, { useState } from "react";

export default function ShowMoreText({text , minLength = 140}) {
    let [expended, setExpended] = useState(false);
    return (
        <div className="flex flex-col justify-between h-[120px] gap-y-5 lg:!h-[145px]">
            <p className="text-justify">{expended ? text : text.slice(0, minLength) + "..."}</p>
            <button
                className={`w-[120px] mx-auto px-5 py-2 flex justify-between shadow-[0px_0px_1px_black] ${
                    expended ? "after:content-['↓']" : "after:content-['↑']"
                }`}
                onClick={() => setExpended((prev) => !prev)}
            >
                {expended ? "کمتر" : "بیشتر"}
            </button>
        </div>
    );
}
