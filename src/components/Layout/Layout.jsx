import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export default function Layout() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
