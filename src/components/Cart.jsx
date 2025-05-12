import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import CartProduct from "./CartProduct";

import { CartContext } from "./CartProvider_context";

export default function Cart() {
    const { cartProducts } = useContext(CartContext);
    let [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        let countPrice = 0;

        cartProducts.map((p) => {
            countPrice += p.price;
        })

        setTotalPrice(countPrice)
    }, [cartProducts]);

    return (
        <Row className="justify-content-center mx-0 !mt-50 md:!mt-30">
            <Col className="flex flex-col gap-y-10" sm={12} md={8} lg={9}>
                {cartProducts.map((product) => (
                    <CartProduct key={product.id} {...product} />
                ))}
            </Col>
            <Col
                className="fixed md:static top-12 bg-white flex flex-col gap-y-5 py-3 shadow-[0px_0.3px_0px_#9d9d9d]"
                sm={12}
                md={4}
                lg={3}
            >
                <h1> جمع کل : {totalPrice} تومان</h1>
                <button className="!bg-[var(--color-secondary)] text-[var(--color-white)] py-2 !rounded-xl w-full !text-2xl">
                    خرید
                </button>
            </Col>
        </Row>
    );
}
