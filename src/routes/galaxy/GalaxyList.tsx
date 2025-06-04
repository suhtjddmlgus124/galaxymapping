import { useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import galaxies from "../../db/galaxies";
import type { Galaxy } from "../../types/galaxy";

interface TableRowProps {
    galaxy: Galaxy;
}
function TableRow({ galaxy }: TableRowProps) {
    const navigate = useNavigate();

    return (
        <tr onClick={() => {navigate(`/galaxy/${galaxy.id}/`)}}>
            <td>{galaxy.name}</td>
        </tr>
    )
}

export default function GalaxyList() {
    return (
        <Container className="my-3">
            <h3>은하 목록</h3>

            <Table hover>
                <thead className="table-dark">
                    <tr>
                        <th>이름</th>
                    </tr>
                </thead>
                <tbody>
                    { galaxies.map((galaxy) => (
                        <TableRow galaxy={galaxy} key={galaxy.id} />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}