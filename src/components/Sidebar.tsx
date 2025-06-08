import { Offcanvas, Nav, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <Offcanvas show backdrop={false} scroll={true} className="bg-body-secondary text-dark" style={{width: "17rem"}}>
            <Offcanvas.Header className="fs-2 fw-bold">
                프로젝트기반연구
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column p-2">
                <Nav as={ListGroup}>
                    <ListGroup.Item>
                        <Nav.Link to="/mapping/" as={Link}>은하 지도</Nav.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Nav.Link to="/galaxy/" as={Link}>은하 목록</Nav.Link>
                    </ListGroup.Item>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );  
}