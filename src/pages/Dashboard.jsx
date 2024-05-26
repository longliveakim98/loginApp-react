//dashboard.jsx 
import { Container, Card, Row, Col } from "react-bootstrap";
import useLocalStorage from 'use-local-storage';
import Navbar1 from "../components/Navbar";

export default function Dashboard() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
        <div className="background d-flex flex-column vh-100" data-theme={isDark ? "dark" : "light"}>
            <Navbar1 isDark={isDark} setIsDark={setIsDark} />
            <Row>
                <Col md={4}>
                    <Container className="container-fluid mt-5 mx-lg-5 mx-md-auto">
                        <h1 className="my-3">Dashboard</h1>
                        <Card className="my-3 background card">
                            <Card.Body>
                                <Card.Title>Sigma School Analytics</Card.Title>
                                <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}
