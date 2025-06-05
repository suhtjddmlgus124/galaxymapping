import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Index() {
    return (
        <Container className="my-3">
            <Link to="/mapping/">매핑</Link>
            <Link to="/galaxy/">은하 목록</Link>
        </Container>
    )
}