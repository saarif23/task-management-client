import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask";
import PrivateRoute from "./PrivateRoute";
import TodoTask from "../Pages/Dashboard/TodoTask";
import Blogs from "../Pages/Blogs";
import Pricing from "../Pages/Pricing";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "createTask",
                element: <PrivateRoute><CreateTask /></PrivateRoute>
            },
            {
                path: "todoTask",
                element: <PrivateRoute><TodoTask /></PrivateRoute>
            },
           
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/blogs',
        element: <Blogs />
    },
    {
        path: '/pricing',
        element: <Pricing />
    }
])
export default Router;