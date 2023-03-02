import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ShowList all="schedule?country=US&date=2023-03-02" />} />
          <Route path="/funny" element={<ShowList all="search/shows?q=funny" />} />
          <Route path="/action" element={<ShowList all="search/shows?q=action" />} />
          <Route path="/anime" element={<ShowList all="search/shows?q=anime" />} />
          <Route path="/bollywood" element={<ShowList all="search/shows?q=bollywood" />} />
          <Route path="/hollywood" element={<ShowList all="search/shows?q=hollywood" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/showsummary/:id" element={<ShowSummary />} />

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
