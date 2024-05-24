import { Container, Button, Form } from "react-bootstrap";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectEmail = email === 'mohdaimanhakim.98@gmail.com'
        const isCorrectPassword = password === 'password';
        if (isCorrectEmail && isCorrectPassword) {
            authContext.setToken('1234');
            navigate("/dashboard");
        }
    }

    return (
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Pasword"
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>Login</Button>
            </Form>

        </Container>
    )
}