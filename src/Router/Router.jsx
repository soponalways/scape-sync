import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }, 
])