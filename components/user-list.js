import React from "react";
import { Card, Button, Col, ListGroup } from "react-bootstrap";
import { useRouter } from "next/router";

function UserList({ detail }) {
  const router = useRouter();
  const openDetail = (id) => {
    router.push("/about/" + id);
  };

  return (
    <>
      <Col>
        <Card style={{ width: "18rem", minHeight: "100%" }}>
          <Card.Img variant="top" src={detail.image} style={{ width: "50%" }} />
          <Card.Body>
            <Card.Title>{detail.title}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Rating : {detail.rating.rate}/5 ({detail.rating.count})
              </ListGroup.Item>
              <ListGroup.Item>Price : {detail.price}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" onClick={() => openDetail(detail.id)}>
              Detail
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default UserList;
