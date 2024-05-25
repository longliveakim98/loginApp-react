import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";
import useLocalStorage from 'use-local-storage';

export default function Dashboard() {

    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    function logout() {
        setToken(null); // Clear the token
        navigate("/login"); // Navigate to the login page
        setIsDark(null);
    }


    return (
        <div className="background d-flex flex-column vh-100 p-3" data-theme={isDark ? "dark" : "light"}>
            <Row>
                <Col md={4}>
                    <Container className="container-fluid mt-5 mx-lg-5 mx-md-auto">
                        <h1 className="my-3">Dashboard</h1>
                        <Card className="my-3 background card">
                            <Card.Body>
                                <Card.Title >Sigma School Analythics</Card.Title>
                                <Card.Text>Peope who graduate who get jobs: 80%</Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="secondary" onClick={logout}>Log Out</Button>
                    </Container>
                </Col>
            </Row>

        </div>
    )
}