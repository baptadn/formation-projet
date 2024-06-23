import axios from "axios";

export const loadMovies = async (term = "star wars") => {
  try {
    const {
      data: { Search: search },
    } = await axios.get(`http://www.omdbapi.com/?apikey=b502738f&s=${term}`);

    const filteredData = search
      .filter((movie) => Number(movie.Year) > 2002)
      .map(({ Title: title, Year: year }) => ({
        title,
        year,
      }));

    console.log({ filteredData });
  } catch (e) {
    console.log(e);
  }
};
