import { useNavigate } from "react-router-dom";
import imdb from "../../assets/imdb.svg";
import rotten_tomatoes from "../../assets/rotten_tomatoes.svg";

import PropTypes from "prop-types"

const MovieItem = ({ data }) => {
    const navigate = useNavigate();
    const { title, poster_path, vote_average, release_date, original_language, id } = data

    const handleNavigate = (id) => {
        navigate(`movie/${id}`);
    }

    return (
        <section data-testid="movie-card" className="w-[250px] cursor-pointer" onClick={() => handleNavigate(id)}>
            <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster_one" height={370} />

            <section className="mt-3 space-y-2.5">
                <p data-testid="movie-release-date" className="font-semibold text-xs text-color2 text-center 840:text-start"> {release_date} </p>
                
                <h4 data-testid="movie-title" className="text-color3 text-lg font-semibold text-center 840:text-start"> {title} </h4>

                <section className="flex items-center justify-center 840:justify-between gap-2.5 mt-4">
                    <section className="flex items-center gap-1.5"> 
                        <img src={imdb} alt="imdb-icon" /> 
                        <p className="font-normal text-xs"> {vote_average} / 10 </p>
                    </section>
                    <section className="flex items-center gap-1.5">
                        <img src={rotten_tomatoes} alt="rotten_tomatoes-icon" />
                        <p className="font-normal text-xs"> 97% </p>
                    </section>
                </section>

                <p className="font-semibold text-xs text-color2 text-center 840:text-start"> {original_language} </p>
            </section>

        </section>
    );
}

MovieItem.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default MovieItem;