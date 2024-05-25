import { Container, Button, Form } from "react-bootstrap";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";
import useLocalStorage from 'use-local-storage';
import { Toggle } from "../components/Toggle";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    function login() {
        const isCorrectEmail = email === 'mohdaimanhakim.98@gmail.com'
        const isCorrectPassword = password === 'password';
        if (isCorrectEmail && isCorrectPassword) {
            authContext.setToken('1234');
            navigate("/dashboard");
        }
    }

    return (
        <div className="p-3 background vh-100 d-flex" data-theme={isDark ? "dark" : "light"}>


            <Container className="container d-flex flex-column rounded px-5 h-75  " style={{ width: "500px", marginTop: "75px" }}>
                <Toggle
                    isChecked={isDark}
                    handleChange={() => setIsDark(!isDark)}
                />
                <Form className="my-auto">
                    <h1 className="title text-center mb-5">Login to your account</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted ">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Pasword"
                        />
                    </Form.Group>
                    <div className="align-items-center justify-content-center d-flex" >
                        <Button className="w-75  py-3 mt-3" variant="primary" onClick={login}>Login</Button>
                    </div>
                </Form>

            </Container>
        </div>
    )
}