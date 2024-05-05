import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

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
            }
        ]
    },
]);

export default router;