import search_icon from "../../assets/search.svg";

const SearchBar = () => {

    return (
        <section className="flex items-center rounded-md border-2 h-10 border-white p-1 xxs:p-2 w-[525px]">
            <input 
                type="text" 
                placeholder="What do you want to watch?" 
                className="border-transparent bg-transparent text-white placeholder:text-white w-[95%] xxs:flex-1 focus:outline-none h-full p-2" 
            />
            <img src={search_icon} alt="search" />
        </section>
    );
}
 
export default SearchBar;