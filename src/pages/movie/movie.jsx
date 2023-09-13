import { Fragment } from "react";

import { useParams } from "react-router-dom";

import SideBar from "../../components/sidebar/sidebar";
import MovieDetailsMain from "../../components/movie/movie-details-main";
import MovieDetailsTop from "../../components/movie/movie-details-top";

import useMovieDetail from "../../api/services/movie-details-services";
import Loader from "../../components/loader/loader";

const Movie = () => {
    const { id } = useParams()
    const { data, loading, error } = useMovieDetail(id);
    console.log(data);

    return (
        <main className="flex flex-nowrap h-screen">
            <SideBar />
            <section className="flex-1 overflow-y-auto px-2 sm:px-5 lg:px-10 pt-10">
                { loading && <section className="flex justify-center"> <Loader /> </section> }
                { error && <section className="flex justify-center text-color1 text-lg sm:text-xl"> Oops!!! unable to fetch movie detail </section> }
                { data &&
                    <Fragment>
                        <img className="rounded-[20px]" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} width={"100%"} height={300} alt={`${data.title}-image`} />
                        <MovieDetailsTop data={data} />
                        <MovieDetailsMain data={data} />
                    </Fragment>
                } 
            </section>
        </main>
    );
}
 
export default Movie;