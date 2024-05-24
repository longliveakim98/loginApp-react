import { Container, Card, Row, Col } from "react-bootstrap";


export default function Dashboard() {

    return (
        <Container>
            <h1 className="my-3">Dashboard</h1>
            <Row>
                <Col md={4}>
                    <Card className="my-3">
                        <Card.Body>
                            <Card.Title>Sigma School Analythics</Card.Title>
                            <Card.Text>Peope who graduate who get jobs: 80%</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}