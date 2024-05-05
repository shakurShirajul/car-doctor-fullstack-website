import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddNewService from "../Pages/AddNewService/AddNewService";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "addnewservice",
                element: <AddNewService/>,
            },
            {
                path: "checkout",
                element: <Checkout></Checkout>
            },
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;