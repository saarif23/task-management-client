import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
])
export default Router;