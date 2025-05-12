import React from "react";

import Category from "../../../components/category/Category";

import bg1 from "../../../assets/images/ImageBannerPair-bg-1.jpg";
import bg2 from "../../../assets/images/ImageBannerPair-bg-2.jpg";

const styleConfig = {
    backgrounds: {
        primary: bg1,
        secondary: bg2,
    },
    texts: {
        primary: "آزمایشگاه کینو",
        secondary: "پارچه های کینو",
    },
    btnStyle: {
        bcr: "#7F0019",
        text_clr: "#fff",
        border_clr: "#7F0019",
    },
};

export default function ImageBannerPair() {
    return <Category {...styleConfig} />;
}
