export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=uuU6bmwAWCofaenTxcS6mduKzJVazy5U`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url,
    };
  });

  return gifs;
};
