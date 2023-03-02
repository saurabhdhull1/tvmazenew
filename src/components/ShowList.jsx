import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const url = "https://api.tvmaze.com";

class ShowsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.all !== this.props.all) {
      this.fetchData();
    }
  }

  fetchData() {
    axios
      .get(`${url}/${this.props.all}`)
      .then((response) => this.setState({ shows: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { shows } = this.state;
    return (
      <div className="container-fluid">
        <div className="row text-center">
          {shows.map((show) => (
            <div className="col-md-2 col-12 bg-red pb-5" key={show.show.id}>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  loading="lazy"
                  src={show.show.image?.medium}
                  alt={show.show.name}
                  style={{ width: "100%" }}
                />
                <p
                  style={{
                    fontWeight: "bolder",
                    height: "60px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  {show.show.name}
                </p>
                <div
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  <p>Genres : {show.show.genres?.join(", ")}</p>
                  <p>Language : {show.show.language}</p>
                  <p>Data : {show.show.premiered}</p>
                  <p>Ratings : {show.show.rating?.average}</p>
                  <Link to={`/showsummary/${show.show.id}`}>
                    <button className="btn btn-danger w-100">
                      View Summary
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShowsList;
