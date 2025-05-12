import React from 'react'
import Category from '../../../components/category/Category'

import bg1 from "../../../assets/images/ImageBannerPair-bg-3.jpg";
import bg2 from "../../../assets/images/ImageBannerPair-bg-4.jpg";

const styleConfig = {
    backgrounds: {
        primary: bg1,
        secondary: bg2,
    },
    texts: {
        primary: "جامپر و ژاکت کش باف پشمی",
        secondary: "کت و کاپشن",
    },
    btnStyle: {
        border_clr: "#7f0019",
        text_clr: "#fff",
        bcr: "#7f0019",
    }
};

export default function ImageBannerPair() {
    return <Category {...styleConfig} />;
}
