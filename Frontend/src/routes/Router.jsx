import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import Login from "../Pages/Authentication/Login";
import SingleBookDetails from "../components/SingleBookDetails";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signUp",
				element: <SignUp />,
			},
			{
				path: "/book/:id",
				element: <SingleBookDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/book/${params.id}`),
			},
		],
	},
]);
