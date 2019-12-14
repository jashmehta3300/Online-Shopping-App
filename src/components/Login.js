import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import auth from "./auth";

export class Login extends Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
          authenticated: false
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(e) {
        e.preventDefault();
    
        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
        }
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }
    
        if (this.state.username === 'admin' && this.state.password === 'admin'){
        return this.setState({ error: 'Login Successful' });
        }
    
        return this.setState({ error: 'Wrong Password'});
      }
    
      handleUserChange(e) {
        this.setState({
          username: e.target.value,
        });
      };
    
      handlePassChange(e) {
        this.setState({
          password: e.target.value,
        });
      }
    
    render() {
    
    return (
    <div>
        <div>
            <Navbar className="navbar bg-primary">
                <div className="col-lg-5"></div>
                <div className="col-lg-4">
                    <Navbar.Brand>
                        <div className="title pl-4">
                            CAFE  UNICODE  
                        </div>
                    </Navbar.Brand>
                </div>
            </Navbar>
        </div>
    
      <div className="form-body">
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleUserChange}/>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange}  />
            </Form.Group>
    
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="status">
                {
                    this.state.error 
                }
            </div>      
            <Button variant="primary" type="submit" onClick={() => {
                auth.login(() => {
                this.props.history.push("/home");
                });
                }}>
                Login
            </Button>
        </Form>
    
      </div>
</div>
);
}
}
export default Login
