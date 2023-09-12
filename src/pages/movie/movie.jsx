import VideoPlayer from "../../components/movie/video-player";
import SideBar from "../../components/sidebar/sidebar";
import MovieDetailsMain from "../../components/movie/movie-details-main";
import MovieDetailsTop from "../../components/movie/movie-details-top";

import video from "../../assets/Mozilla Firefox 2023-07-26 17-28-33.mp4";

const Movie = () => {
    return (
        <main className="flex flex-nowrap h-screen">
            <SideBar />
            <section className="flex-1 overflow-y-auto px-2 sm:px-5 lg:px-10 pt-10">
                <VideoPlayer src={video} />
                <MovieDetailsTop />
                <MovieDetailsMain /> 
            </section>
        </main>
    );
}
 
export default Movie;