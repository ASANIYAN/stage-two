import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-6 mt-20 mb-5">
            <section className="flex items-center gap-8">
                <img src={fb} width={24} height={24} alt="facebook-icon" />
                <img src={insta} width={24} height={24} alt="instagram-icon" />
                <img src={twitter} width={24} height={24} alt="twitter-icon" />
                <img src={youtube} width={24} height={24} alt="youtube-icon" />
            </section>

            <section className="flex flex-col xs:flex-row items-center gap-5 text-color3 text-lg font-semibold ">
                <p> Conditions of Use </p>
                <p> Privacy & Policy </p>
                <p> Press Room </p>
            </section>

            <p className="text-color4 font-semibold text-lg text-center"> &copy; 2021 MovieBox by Adriana Eka Prayudha </p>

        </footer>
    );
}
 
export default Footer;