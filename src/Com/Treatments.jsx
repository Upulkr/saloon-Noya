import { Card, Col, Row } from "react-bootstrap";
import treatments from "./Stylists/treatments";

function Treatments() {
  return (
    <Row>
      {treatments.map((treatment) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card.Title className="text-center">{treatment.name}</Card.Title>
          <Card.Img src={treatment.img} />
          <Card.Text className="text-center fs-4">
            {treatment.description}
          </Card.Text>
        </Col>
      ))}
    </Row>
  );
}

export default Treatments;
