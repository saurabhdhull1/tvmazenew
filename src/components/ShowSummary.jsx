import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class ShowSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    const { id } = useParams();
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => this.setState({ show: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { show } = this.state;
    return (
      <div key={show.id} className="container" >
        <h1>Summary </h1>
        <div className="row mt-3">
          <div className="col-md-4 col-12">
            <img loading="lazy" src={show.image?.medium} alt={show.name} />
          </div>
          <div className="col-md-8 col-12">
            <h2>{show.name}</h2>
            <p>Genres : {show.genres?.join(", ")}</p>
            <p>Language : {show.language}</p>
            <p>Data : {show.premiered}</p>
            <p>Ratings : {show.rating?.average}</p>
            <p>{show.summary}</p>
          </div>
        </div>
      </div>
    );
  }
} 

export default ShowSummary;
