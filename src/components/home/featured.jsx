import { ArrowRight2 } from "iconsax-react";
import MovieItem from "../movie-item/movie-item";

const Featured = () => {
    return (
        <section>
            <section className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-xl xs:text-3xl  sm:text-4xl"> Featured Movie </h3>
                <p className="text-sm xs:text-base sm:text-lg font-normal text-color1 flex items-center gap-1"> See more <ArrowRight2 color="#BE123C" size={18} /> </p>
            </section>
            <section className="mt-10 flex flex-wrap gap-8 justify-center 840:justify-start">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </section>
        </section>
    );
}
 
export default Featured;