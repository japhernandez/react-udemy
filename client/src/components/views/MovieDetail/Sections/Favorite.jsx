import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";

const Favorite = ({ movieInfo, movieId }) => {
  console.log(window.localStorage.getItem("userId"));
  const { title, backdrop_path, runtime } = movieInfo;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const userFrom = window.localStorage.getItem("userId");
  let variables = { userFrom, movieId, title, backdrop_path, runtime };

  useEffect(() => {
    fetchResult("/api/favorite/favoriteNumber", variables, setFavoriteNumber);
    fetchResult("/api/favorite/favorited", variables, setFavorited);
  }, [variables]);

  const fetchResult = (url, data, setResult) => {
    axios
      .post(url, data)
      .then((res) => {
        setResult(
          res.data.favoriteNumber ? res.data.favoriteNumber : res.data.favorited
        );
      })
      .catch();
  };

  const onClickFavorite = () => {
    if (Favorited) {
      axios
        .post("/api/favorite/removeFromFavorite", variables)
        .then((res) => {
          if (res.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("No se pudo");
          }
        })
        .catch();
    } else {
      console.log(variables);
      axios
        .post("/api/favorite/addToFavorite", variables)
        .then((res) => {
          if (res.data.success) {
            setFavoriteNumber(FavoriteNumber + 1);
            setFavorited(!Favorited);
          }
        })
        .catch();
    }
  };

  return (
    <div>
      <Button onClick={onClickFavorite}>
        {Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}
      </Button>
    </div>
  );
};

export default Favorite;
