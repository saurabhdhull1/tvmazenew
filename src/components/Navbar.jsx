import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  theme = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
      document.body.className = "dark";
    } else {
      this.setState({ theme: "light" });
      document.body.className = "light";
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            TV maze
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/funny">
                  Funny
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/action">
                  Action
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/anime">
                  Anime
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bollywood">
                  Bollywood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hollywood">
                  Hollywood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-success" onClick={this.theme}>
                  Theme
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-success" to="/search">
              Go to Search
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
