import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import React, { useState, useContext } from 'react';
import UserContext from "./UserContext";

function Login({ history }) {
  const userContext = useContext(UserContext);
  var usernameInput = React.createRef(); //document.getById
  var passwordInput = React.createRef();
  var doLogin = () => {
    // Uncontrolled
    console.log("usernameInput:" + usernameInput.current.value);
    console.log("passwordInput:" + passwordInput.current.value);

    var data = {
      email: usernameInput.current.value,
      password: passwordInput.current.value
    };
    fetch("https://nodeapi.pyther.com/login", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        // setting the login TRUE
        userContext.doLogin(true, { id: '8983938938', name: "Gaurav" });
        if (response.result === "success") {
          history.push("/home");
        } else {
          alert(response.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input ref={usernameInput} placeholder="username" /><br /><br />
        <input ref={passwordInput} type="password" placeholder="password" /><br /><br />
        <input type="button" onClick={doLogin} value="Submit" />&nbsp;&nbsp;
        <input type="button" onClick={() => {
          console.log("trying to open /about protected");
          history.push("/about");
        }} value="About" />
      </form>
    </div>
  );
}

export function LoginControlled({ history }) {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');
  var onHandleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }
  var doLogin = () => {
    var data = { email, password };
    fetch("https://nodeapi.pyther.com/login", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response.result === "success") {
          history.push("/home");
        } else {
          alert(response.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div style={{ margin: '10%' }} >
      <h3>Login</h3>
      <div style={{ maxWidth: '600px' }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="text" placeholder="Enter email" onChange={onHandleChange} value={email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={onHandleChange} value={password} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={doLogin} variant="primary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Login;
