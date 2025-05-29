import { useParams } from "react-router-dom";
import galaxies from "../../db/galaxies";
import common from "../../db/common";
import type { Galaxy } from "../../types/galaxy";
import { Container, Row, Col, Card, Table, Image } from "react-bootstrap";


function GalaxyDisplay({ galaxy }: { galaxy: Galaxy }) {
    return (
        <Card className="mb-3">
            <Card.Header className="fs-5 fw-bold">사진</Card.Header>
            <Card.Body>
                <Table>
                    <tbody>
                        <tr className="table-dark">
                            <th>은하 사진</th>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image fluid src={galaxy.photo} style={{width: "100%", height: "100%", objectFit: "contain"}} />
                            </td>
                        </tr>
                        <tr className="table-dark">
                            <th>스펙트럼 사진</th>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image fluid src={galaxy.spectrum} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

function ShootInformationDisplay({ galaxy }: { galaxy: Galaxy }) {
    return (
        <Card className="mb-3">
            <Card.Header className="fs-5 fw-bold">촬영 정보</Card.Header>
            <Card.Body>
                <Table>
                    <tbody>
                        <tr>
                            <th>촬영 설정</th>
                            <td>{galaxy.metadata}</td>
                        </tr>
                        <tr>
                            <th>촬영 일자 및 시간</th>
                            <td>{galaxy.dateTime}</td>
                        </tr>
                        <tr>
                            <th>촬영 장소</th>
                            <td>{common.location}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

function TelescopeDisplay() {
    return (
        <Card>
            <Card.Header className="fs-5 fw-bold">망원경 제원</Card.Header>
            <Card.Body>
                <Table>
                    <colgroup>
                        <col width="15%" />
                        <col width="85%" />
                    </colgroup>
                    <tbody>
                        <tr className="table-dark">
                            <th colSpan={2}>주 망원경</th>
                        </tr>
                        <tr>
                            <th>광학계</th>
                            <td>{common.telescope.main.optical}</td>
                        </tr>
                        <tr>
                            <th>분광기</th>
                            <td>{common.telescope.main.spectrometer}</td>
                        </tr>
                        <tr>
                            <th>스펙트럼 카메라</th>
                            <td>
                                {common.telescope.main.camera.spectrometerCamera}
                            </td>
                        </tr>
                        <tr>
                            <th>미러<br/>카메라</th>
                            <td>
                                {common.telescope.main.camera.mirrorCamera}
                            </td>
                        </tr>

                        <tr className="table-dark">
                            <th colSpan={2}>가이드 망원경</th>
                        </tr>
                        <tr>
                            <th>광학계</th>
                            <td>{common.telescope.guide.optical}</td>
                        </tr>
                        <tr>
                            <th>카메라</th>
                            <td>{common.telescope.guide.camera}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default function GalaxyDetail() {
    const { galaxyId } = useParams();

    const galaxy: Galaxy = galaxies[Number(galaxyId)];

    return (
        <Container className="my-3">
            <h2 className="fw-bold mb-3">{galaxy.name}</h2>
            
            <hr/>
            
            <Row className="g-3">
                <Col className="col-12 col-lg-6">
                    <GalaxyDisplay galaxy={galaxy} />
                </Col>

                <Col className="col-12 col-lg-6">
                    <ShootInformationDisplay galaxy={galaxy} />
                    <TelescopeDisplay />
                </Col>
            </Row>
        </Container>
    );
}