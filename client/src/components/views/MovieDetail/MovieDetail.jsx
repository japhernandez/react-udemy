import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Row } from "antd";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import Favorite from "./Sections/Favorite";

const MovieDetail = ({ match }) => {
  let movieId = match.params.movieId;

  const [Movie, setMovie] = useState([]);
  const [MovieCast, setMovieCast] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetchDetailMovie(endpointInfo, setMovie);
    fetchDetailMovie(endpointCrew, setMovieCast);
  }, [movieId]);

  const fetchDetailMovie = (url, setResult) => {
    axios
      .get(url)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  const toogleActorView = () => setActorToggle(!ActorToggle);

  return (
    <div>
      {/* Header */}
      {Movie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}

      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favorite movieInfo={Movie} movieId={movieId} />
        </div>

        {/* Movie Info */}
        <MovieInfo movie={Movie} />
        <br />
        {/* Actors Grid */}

        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button onClick={toogleActorView}> Toggle Actor View</button>
        </div>

        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {MovieCast.cast &&
              MovieCast.cast.map((cast, index) => (
                <Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
                    characterName={cast.name}
                  />
                </Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
