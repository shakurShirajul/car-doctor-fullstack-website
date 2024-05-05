import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            }
        ]
    },
]);

export default router;