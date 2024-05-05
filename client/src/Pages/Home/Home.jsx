import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;