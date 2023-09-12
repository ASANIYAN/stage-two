import star from "../../assets/star.svg"

const MovieDetailsTop = () => {
    return (
        <section className="flex flex-wrap gap-2.5 items-center justify-between mt-10">
            <section className="flex flex-wrap items-center gap-2.5">
                <section className="flex flex-wrap items-center gap-2.5 font-medium text-base sm:text-lg lg:text-xl text-color13">
                    <span> Top Gun: Maverick </span> • <span> 2022 </span>  <span> • </span>  <span> PG-13</span>  <span> • </span> <span> 2h 10m </span>
                </section>
                <section className="flex items-center gap-2.5">
                    <div className="border border-color15 rounded-[15px] py-0.5 px-2.5">  <p className="text-color14 font-medium text-sm"> Action </p> </div>
                    <div className="border border-color15 rounded-[15px] py-0.5 px-2.5">  <p className="text-color14 font-medium text-sm"> Drama </p> </div>
                </section>
            </section>
            <section className="flex items-center gap-2">
                <img src={star} alt="star" width={30} height={30} />
                <span className="text-color16 text-lg sm:text-xl lg:text-2xl font-medium"> 8.5 </span>
                <span className="font-medium text-base sm:text-lg lg:text-xl text-color6"> | 350k </span>
            </section>
        </section>
    );
}
 
export default MovieDetailsTop;