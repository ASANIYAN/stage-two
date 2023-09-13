import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const useMovieSearch = (query) => {
    const api = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        }
      };

    useEffect(() => {
        console.log(query,"query");
        if (query.trim() === "") {
            setData({});
            return;
        } else {
            setLoading(true);
            fetch(api, options)
              .then(response => response.json())
              .then(response => {
                setLoading(false);
                setData(response);
              })
              .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err)
              });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


      return { data, loading ,error };
}

useMovieSearch.propTypes = {
    query: PropTypes.string.isRequired
}
 
export default useMovieSearch;