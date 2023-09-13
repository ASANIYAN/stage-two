import { useEffect, useState } from "react";
import search_icon from "../../assets/search.svg";

import useMovieSearch from "../../api/services/search-movies-services";
import Loader from "../loader/loader";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [ outsideClick, setOutsideClick ] = useState(false);

    const ref = useOutsideClick(() => setOutsideClick(true));

    const { data, loading, error } = useMovieSearch(debouncedSearchTerm);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setOutsideClick(false);
    };

    const handleNavigation = (id) => {
        navigate(`movie/${id}`);
    }

    useEffect(() => {
        // delays request by 3 seconds
        const timerId = setTimeout(() => { 
          setDebouncedSearchTerm(searchQuery);
        }, 300);
    
        return () => {
          clearTimeout(timerId);
        };
      }, [searchQuery]);


    return (
        <section className="flex relative items-center rounded-md border-2 h-10 border-white p-1 xxs:p-2 w-[525px]">
            <input 
                type="text" 
                placeholder="What do you want to watch?"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-transparent bg-transparent text-white placeholder:text-white w-[95%] xxs:flex-1 focus:outline-none h-full p-2" 
            />
            <img src={search_icon} alt="search" />
           { !outsideClick && data.results?.length > 0 &&
                <section 
                    ref={ref}
                    className="bg-white absolute w-full top-10 -translate-x-2 rounded z-10 p-3 flex flex-col gap-5 shadow"
                >
                    { loading && <section className="flex justify-center"> <Loader /> </section> }
                    {  !loading && data.results.length > 0 &&
                        data.results.slice(0, 3).map((result) => (
                        <div key={result.id} onClick={() => handleNavigation(result.id)} className="cursor-pointer">
                            <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={`${result.title}-image`} width={80} />
                            <p className="text-color1 text-lg font-medium"> {result.title} </p>
                            <p className="text-color1 text-lg font-medium"> {result.release_date} </p>
                        </div>
                        ))
                    }
                    { error && <span className="flex justify-center text-lg text-color1"> oops! unable to fetch search paramter </span> }
                </section>
            }
        </section>
    );
}
 
export default SearchBar;