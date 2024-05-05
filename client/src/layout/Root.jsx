import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;