import Footer from "../../components/footer/footer";
import Featured from "../../components/home/featured";
import Hero from "../../components/home/hero";
import NavBar from "../../components/navbar/navbar";

import "./home.css";



const Home = () => {

    return (
        <main>
            <section className="top h-[600px]">
                <section className="px-3 lg:px-6 xl:px-20">
                    <NavBar />
                    <section className="mt-10 sm:mt-16 lg:mt-20">
                        <Hero />
                    </section>
                </section>
            </section>
            <section className="mt-10 px-3 lg:px-6 xl:px-20">
                <Featured />
            </section>
            <Footer />
        </main>
    );
}
 
export default Home;