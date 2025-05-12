import Card from "react-bootstrap/Card";
import Button from "../button/Button";
import { Link } from "react-router-dom";
const btnStyle = {
    border_clr: "#c4c4c6",
    text_clr: "#7f0019",
    bcr: "transpatrent",
};

export default function CarouselItem({ id, description, image, price, isNew }) {
    return (
        <Card style={{ border: "0px solid transparent" }}>
            <Link to={`/shop/products/productpage/${id}`}>
                <Card.Img className="max-h-[350px]" variant="top" src={image} />
            </Link>
            <Card.Body className="px-0">
                <Card.Text>{description}</Card.Text>
                <div className="flex justify-between mt-4">
                    <p className="card-price">
                        {price.toLocaleString("en-US")} تومان
                    </p>
                    <Card.Text>
                        {isNew ? <Button {...btnStyle} /> : ""}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}
