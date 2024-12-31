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
import PhotoCard from "./pages/Photo/Photo.tsx";
import Register from "./pages/Register/Register.tsx";
import { store } from "./store/store.ts";

const Main = React.lazy(() => import("./pages/Main/Main.tsx"));

const router = createBrowserRouter([
	{
		path: "/my-photo-blog",
		element: <Layout />,

		children: [
			{
				path: "/my-photo-blog",
				element: (
					<Suspense fallback={<Loader />}>
						<Main />
					</Suspense>
				),
			},
			{
				path: "/my-photo-blog/about",
				element: <About />,
			},
			{
				path: "/my-photo-blog/favorite",
				element: <Favorite />,
			},
			{
				path: "/my-photo-blog/photo/:id",
				element: <PhotoCard />,
			},
			{
				path: "*",
				element: <Error />,
			},
		],
	},
	{
		path: "/my-photo-blog/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "/my-photo-blog/auth/login",
				element: <Login />,
			},
			{
				path: "/my-photo-blog/auth/register",
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
