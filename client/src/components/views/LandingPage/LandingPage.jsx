import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
    // eslint-disable-next-line
  }, []);

  const fetchMovies = (endpoint) => {
    axios
      .get(endpoint)
      .then((res) => {
        setMovies([...Movies, ...res.data.results]);
        setMainMovieImage(res.data.results[0]);
        setCurrentPage(res.data.page);
      })
      .catch((err) => console.log(err));
  };

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <>
      <div style={{ width: "100%", margin: 0 }}>
        {/* Main Image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}

        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>Movies by latest</h2>
          <hr />
          {/* Movie Grid Cards */}
          <Row gutter={[16, 16]}>
            {Movies &&
              Movies.map((movie, index) => (
                <Fragment key={index}>
                  <GridCards
                    landingPage
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </Fragment>
              ))}
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreItems}>Load More...</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
