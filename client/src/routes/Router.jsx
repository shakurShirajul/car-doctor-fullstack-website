import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddNewService from "../Pages/AddNewService/AddNewService";

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
            }
        ]
    },
]);

export default router;