import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../components/button/Button";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { CartContext } from "../../../components/CartProvider_context";

const addProductMessage = withReactContent(Swal);

const style = {
    border_clr: "#c4c4c6",
    bcr: "transparent",
    text_clr: "#7f0019",
    text: "جدید",
};

export default function ProductPage() {
    const { addProduct } = useContext(CartContext);
    let [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let endpoint = [
                `http://localhost:3000/products/${productId}`,
                `http://localhost:3000/products_soft_fabrics/${productId}`,
            ];

            for (const url of endpoint) {
                try {
                    let response = await axios.get(url);
                    setProduct(response.data);
                    return;
                } catch (error) {
                    console.log(`faild to fetch from ${url} :`, error.message);
                }
            }

            console.error("Product not found in any endpoint.");
        };

        if (productId) {
            getData();
        }
    }, [productId]);

    const addProductToCart = () => {
        if (addProduct(product && product)) {
            addProductMessage.fire({
                position: "top-end",
                icon: "success",
                title: "محصول به سبد خرید  اضافه شد ",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            addProductMessage.fire({
                position: "top-end",
                icon: "error",
                title: " نمیتوان دو محصول شبیه به هم را اضافه کرد",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div>
            <Container key={product?.id} className="mt-15 md:mt-40 flex">
                <Row>
                    <Col sm={12} md={5}>
                        <img src={product?.image} alt={product?.name} />
                    </Col>
                    <Col sm={12} md={7} className="mt-5">
                        <div className="mb-4">
                            <h1>{product?.name}</h1>
                            <p className="mb-4">{product?.description}</p>
                            <span>{product?.id}</span>
                            <div className="flex items-center mt-2.5 gap-x-5">
                                <h3 className="h-full my-auto">
                                    {product?.price.toLocaleString("en-US")}{" "}
                                    تومان
                                </h3>

                                {product?.isNew && <Button {...style} />}
                            </div>
                        </div>

                        <div className="h-[0.3px] bg-[#ccc] shadow-[0px_1px_1px_rgbargba(0, 0, 0, 0.05)]"></div>

                        <div>
                            <button
                                onClick={addProductToCart}
                                className="w-full py-3 text-center !bg-[var(--color-secondary)] text-[var(--color-white)] !rounded-[var(--brand-b-radius)]"
                            >
                                اضافه به سبد خرید
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
