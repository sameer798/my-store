import React, { useState, useRef, useContext } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import AuthContext from "../components/store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    e.preventDefault();
    let url;
    if (isLogin) {
      try {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSOAGA9KbcQlrfT01bLVm9ARwFxbvl4sc";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData.error.message || "Something went wrong!");
        }

        const data =await res.json()
        authCtx.login(data.idToken)
        navigate('/store')

      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSOAGA9KbcQlrfT01bLVm9ARwFxbvl4sc";
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (!response.ok) {
          throw new Error(res.error.message || "Something went wrong!");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            {" "}
            {isLogin ? "Login" : "SignUp"}
          </Card.Title>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                ref={emailInputRef}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                ref={passwordInputRef}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              style={{ width: "100%" }}
            >
              {isLogin ? "Login" : "SignUp"}
            </Button>
            <div style={{ marginTop: "1rem" }}>
              <span>New to Store click to</span>
              <button
                style={{
                  backgroundColor: "white",
                  borderStyle: "none",
                  borderBottomStyle: "solid",
                }}
                onClick={signUpHandler}
              >
                SignUp
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
