import { useState, useEffect } from "react";
import { Input, Button, Link, Card } from "@nextui-org/react";
import axios from "axios";
import BACKEND_URL from "../../constants";

export default function SignUp(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    userType: "customer",
    shopId: props.shopId,
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .post(`${BACKEND_URL}/api/auth/users/`, data)
      .then((response) => {
        console.log(response.data);

        axios
          .post(`${BACKEND_URL}/api/token/`, {
            username: data.username,
            password: data.password,
          })
          .then((response) => {
            console.log(response.data);

            console.log(response.data);
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            // window.location.href = "/";
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Card className="signinCard" style={{ position: "absolute" }}>
        <Button
          auto
          text
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "black",
            border: "none",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
        >
          {/* 🆇 */}
          🅇
        </Button>
        <Card.Header className="signinCardHead">Sign Up</Card.Header>
        <Card.Body>
          <Input
            className="signinInput"
            clearable
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />

          <Input
            className="signinInput"
            clearable
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <Input.Password
            className="signinInput"
            clearable
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <Button
            auto
            color={props.buttonColor}
            style={{ marginTop: "1rem" }}
            onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
          <Link className="link" color="text" href="#">
            Already have an account? Sign In
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
