import { useParams } from "react-router-dom";
import galaxies from "../../db/galaxies";
import type { Galaxy } from "../../types/galaxy";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function GalaxyDetail() {
    const { galaxyId } = useParams();

    const galaxy: Galaxy = galaxies[Number(galaxyId)];

    return (
        <Container className="my-3">
            <Row className="g-3">
                <Col className="col-12 col-lg-6">
                    <Card>
                        <Card.Header className="fs-5 fw-bold">
                            {galaxy.name}
                        </Card.Header>
                        
                        <Card.Body className="bg-body-tertiary py-2">은하 사진</Card.Body>
                        <Card.Img src={galaxy.photo}/>


                        <Card.Body className="bg-body-tertiary py-2">스펙트럼 사진</Card.Body>
                        <Card.Img src={galaxy.spectrum}/>

                        <Card.Footer>
                            asdf
                        </Card.Footer>
                    </Card>
                </Col>

                <Col className="col-12 col-lg-6">
                    <Card>
                        <Card.Body>
                            <ul>
                                <li>촬영 일자 및 시간: </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}