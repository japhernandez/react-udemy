import React, { useEffect, useState } from "react";
import "./favorite.css";
import axios from "axios";
import { Popover } from "antd";
import { IMAGE_BASE_URL } from "../../Config";

const FavoritePage = () => {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovieFavorite();
  }, []);

  const fetchMovieFavorite = () => {
    axios
      .post("/api/favorite/getFavoritedMovie", {
        userFrom: localStorage.getItem("userId"),
      })
      .then((res) => {
        if (res.data.success) {
          setFavorites(res.data.favorites);
        }
      });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = { movieId, userFrom };
    axios.post("/api/favorite/removeFromFavorite", variables).then((res) => {
      if (res.data.success) {
        fetchMovieFavorite();
      }
    });
  };

  const renderCards = Favorites.map(
    ({ movieId, userFrom, title, runtime, backdrop_path }, index) => {
      const content = (
        <div>
          {backdrop_path ? (
            <img src={`${IMAGE_BASE_URL}w500${backdrop_path}`} alt={title} />
          ) : (
            ""
          )}
        </div>
      );
      return (
        <tr key={index}>
          <Popover content={content} title={`${title}`}>
            <td>{title}</td>
          </Popover>
          <td>{runtime} mins</td>
          <td>
            <button onClick={() => onClickDelete(movieId, userFrom)}>
              Remove
            </button>
          </td>
        </tr>
      );
    }
  );

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2>Favorite Movies</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>

            <th>Movie RunTime</th>
            <th>Remove from favorites</th>
          </tr>
        </thead>
        <tbody>{renderCards}</tbody>
      </table>
    </div>
  );
};

export default FavoritePage;
