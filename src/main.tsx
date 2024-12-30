import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader/Loader.tsx";
import "./index.css";
import AuthLayout from "./layout/AuthLayout/AuthLayout.tsx";
import Layout from "./layout/Layout/Layout.tsx";
import About from "./pages/About/About.tsx";
import Error from "./pages/Error/Error.tsx";
import Favorite from "./pages/Favorite/Favorite.tsx";
import Login from "./pages/Login/Login.tsx";
import PhotoCard from "./pages/PhotoCard/Photo.tsx";
import Register from "./pages/Register/Register.tsx";
import { store } from "./store/store.ts";

const Main = React.lazy(() => import("./pages/Main/Main.tsx"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<Loader />}>
						<Main />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/favorite",
				element: <Favorite />,
			},
			{
				path: "/photo/:id",
				element: <PhotoCard />,
			},
			{
				path: "*",
				element: <Error />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
