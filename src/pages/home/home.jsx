import Hero from "../../components/home/hero";
import NavBar from "../../components/navbar/navbar";

import "./home.css";



const Home = () => {
    return (
        <main>
            <section className="top h-[600px]">
                <section className="px-2 lg:px-6 xl:px-20">
                    <NavBar />
                    <section className="mt-10">
                        <Hero />
                    </section>
                </section>
            </section>
        </main>
    );
}
 
export default Home;