import Card from "react-bootstrap/Card";

export default function ExplorMensWearItem({image , description }) {
    return (
        <Card style={{ border: "0px solid transparent" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body className="px-0">
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
