import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const API_URL = "https://api.tvmaze.com/search/shows?q=";

class ShowsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      searchQuery: "",
    };
  }

  handleSearchInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  fetchShows = () => {
    const { searchQuery } = this.state;
    if (searchQuery) {
      axios
        .get(`${API_URL}${searchQuery}`)
        .then((response) => {
          this.setState({ shows: response.data });
        })
        .catch((error) => console.log(error));
    } else {
      this.setState({ shows: [] });
    }
  };

  componentDidMount() {
    this.fetchShows();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchShows();
    }
  }

  render() {
    const { shows, searchQuery } = this.state;
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4"></div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for TV shows"
                value={searchQuery}
                onChange={this.handleSearchInputChange}
              />
            </div>
          </div>
        </div>
        {searchQuery.length > 0 && (
          <div className="row">
            <h1 className="p-3 text-center" >Search result for: {searchQuery}</h1>
          </div>
        )}
        <div className="row text-center">
          {shows.map((show) => (
            <div className="col-md-3 col-12 bg-red pb-5" key={show.show.id}>
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
                    padding:"10px"
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
                  <Link to={`/shows/${show.show.id}`}>
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
