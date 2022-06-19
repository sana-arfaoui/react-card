import "./App.css";
import React, { Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import img from './images/profile.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Arfaoui Sana",
      bio: "Web developer",
      profession: "Developer",
      imgUrl:img,
      hide: false,
      countshow: 0,
    };

    this.handleClick = () => {
      this.setState({ hide: !this.state.hide });
    };
  }
  render() {
    if (this.state.hide) {
      return (
        <div className="app">
          <div className="header-app">
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <>
                  <Alert key="danger" variant="danger">
                    Hidden ..
                  </Alert>
                  {/* <h5 style={{color:"BlueViolet"}}>Mounted since: {this.state.countshow} s</h5> */}
                </>
              </Card.Body>
              <Button variant="primary" onClick={this.handleClick}>
                {this.state.hide ? "Show" : "Hide"}
              </Button>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="header-app" >
            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src={this.state.imgUrl}
                alt="profilephoto"
              />
              <Card.Body>
                <Card.Title>
                  <h1 style={{ color: "gray" }}>{this.state.fullName}</h1>
                </Card.Title>
                <Card.Text>
                  <h5>{this.state.profession}</h5>
                  <h5>{this.state.bio}</h5>
                  <h5 style={{ color: " BlueViolet" }}>
                    Mounted since: {this.state.countshow} s
                  </h5>
                </Card.Text>
                <Button variant="primary" onClick={this.handleClick}>
                  {this.state.hide ? "Show" : "Hide"}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
  }
  componentDidMount() {
    if (!this.state.hide) {
      const intervalId = setInterval(() => {
        this.setState((prevState) => {
          return {
            countshow: prevState.countshow + 1,
          };
        });
      }, 1000);
    }
  }
}

export default App;
