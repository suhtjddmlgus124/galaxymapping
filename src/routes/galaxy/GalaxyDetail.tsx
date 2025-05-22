import { useParams } from "react-router-dom";
import galaxies from "../../db/galaxies";
import type { Galaxy } from "../../types/galaxy";
import { Container, Card } from "react-bootstrap";


export default function GalaxyDetail() {
    const { galaxyId } = useParams();

    const galaxy: Galaxy = galaxies[Number(galaxyId)];

    return (
        <Container className="my-3">
            <Card>
                <Card.Header className="fs-5 fw-bold">
                    {galaxy.name}
                </Card.Header>
                <Card.Body>
                    asdf
                </Card.Body>
                <Card.Footer>
                    asdf
                </Card.Footer>
            </Card>
        </Container>
    );
}