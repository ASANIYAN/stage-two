import poster_one from "../../assets/Poster_1.png";
import imdb from "../../assets/imdb.svg";
import rotten_tomatoes from "../../assets/rotten_tomatoes.svg";

const MovieItem = () => {
    return (
        <section className="w-[250px] ">
            <img src={poster_one} alt="poster_one" height={370} />

            <section className="mt-3 space-y-2.5">
                <p className="font-semibold text-xs text-color2 text-center 840:text-start"> USA, 2016 - Current </p>
                
                <h4 className="text-color3 text-lg font-semibold text-center 840:text-start"> Stranger Things </h4>

                <section className="flex items-center justify-center 840:justify-start gap-2.5 mt-4">
                    <section className="flex items-center gap-1.5"> 
                        <img src={imdb} alt="imdb-icon" /> 
                        <p className="font-normal text-xs"> 86.0 / 100 </p>
                    </section>
                    <section className="flex items-center gap-1.5">
                        <img src={rotten_tomatoes} alt="rotten_tomatoes-icon" />
                        <p className="font-normal text-xs"> 97% </p>
                    </section>
                </section>

                <p className="font-semibold text-xs text-color2 text-center 840:text-start"> Action, Adventure, Horror </p>
            </section>

        </section>
    );
}
 
export default MovieItem;