import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { host } from "../../configs";
import { Container, Alert, Card, Navbar } from "react-bootstrap";

const About = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async function () {
      host
        .get("products/" + id)
        .then((res) => setData(res.data))
        .catch(() => setError("Terjadi Kesalahan, silahkan coba lagi nanti"));
    })();
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => router.back()}
            style={{ cursor: "pointer" }}
          >
            &lt;
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        {data && (
          <Card>
            <Card.Img
              style={{ width: "18rem" }}
              variant="top"
              src={data.image}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
};

export default About;
