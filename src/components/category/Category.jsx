import React from "react";

import { Row, Col } from "react-bootstrap";

import Button from "../button/Button";

export default function Category({ backgrounds, btnStyle, texts }) {
    
    const buttonPrimary = { ...btnStyle, text: texts.secondary };
    const buttonSecondary = { ...btnStyle, text: texts.secondary };

    return (
        <Row className="flex gap-y-4 !mt-10">
            <Col
                className="relative mx-auto flex justify-center"
                sm={12}
                md={6}
                >
                <div>
                    <img src={backgrounds.primary} alt="" />
                </div>
                <div className="absolute -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2">
                    <Button {...buttonPrimary} />
                </div>
            </Col>
            <Col className="relative flex justify-center" sm={12} md={6}>
                <div>
                    <img src={backgrounds.secondary} alt="" />
                </div>
                <div className="absolute -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2">
                    <Button {...buttonSecondary} />
                </div>
            </Col>
        </Row>
    );
}