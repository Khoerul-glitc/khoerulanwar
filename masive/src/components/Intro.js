import { Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center
          align-item-center">
            <Row>
              <Col>
              <div className="title">WELCOME</div>
              <div className="title">AYO BERMAIN BERSAMA</div>
              <div className="introButoon mt-4 text-center">
                <Button variant="dark">Gasken</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
    

export default Intro