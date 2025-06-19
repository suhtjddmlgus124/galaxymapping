import { Container, Table } from "react-bootstrap";

export default function Contributor() {
    return (
        <Container className="my-3 d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            <div className="p-4 border border-2" style={{width: "50rem"}}>
                <span className="fs-4 fw-bold">제작자</span>
                <hr/>
                <Table>
                    <colgroup>
                        <col width="20%"/>
                        <col width="80%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>관측팀</th>
                            <td>김남헌, 김준형, 이성영, 임종원</td>
                        </tr>
                        <tr>
                            <th>분석팀</th>
                            <td>김성윤, 이진명</td>
                        </tr>
                        <tr>
                            <th>계산팀</th>
                            <td>강선우, 윤시연</td>
                        </tr>
                        <tr>
                            <th>개발팀</th>
                            <td>성의현, 정연수</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}