import LogIn from "./components/auth/login/LogIn";
import Cart from "./components/Cart";
import Layout from "./components/Layout/Layout";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import ProductPage from "./pages/shop/ProductPage/ProductPage";
import Products from "./pages/shop/products/Products";
import Shop from "./pages/shop/Shop";

const routes = [
    {
        path: "/",
        element:  <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "/shop/products/productpage/:productId",
                element: <ProductPage />,
            },
            {
                path: "Login",
                element: <LogIn />,
            },
            {
                path: "admin",
                element: <Admin />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
];

export default routes;
