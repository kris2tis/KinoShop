import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import CartProviderWrapper from "./components/CartProvider_context.jsx";

createRoot(document.getElementById("root")).render(
    <CartProviderWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartProviderWrapper>
);
