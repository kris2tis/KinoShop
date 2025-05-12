import Card from "react-bootstrap/Card";

function BlogPost({ title, description, image }) {
    
    return (
        <Card style={{border:"0px solid transparent"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BlogPost;