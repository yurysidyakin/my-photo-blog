import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader/Loader.tsx";
import "./index.css";
import AuthLayout from "./layout/AuthLayout/AuthLayout.tsx";
import Layout from "./layout/Layout/Layout.tsx";
import About from "./pages/about/About.tsx";
import Error from "./pages/Error/Error.tsx";
import Favorite from "./pages/Favorite/Favorite.tsx";
import Login from "./pages/Login/Login.tsx";
import PhotoCard from "./pages/Photo/Photo.tsx";
import Register from "./pages/Register/Register.tsx";
import Welcome from "./pages/Welcome/Welcome.tsx";
import { store } from "./store/store.ts";

const Main = React.lazy(() => import("./pages/main/Main.tsx"));

// Функция для проверки авторизации
const checkAuth = () => {
	const token = localStorage.getItem("token");
	if (!token) {
		return redirect("/auth/login");
	}
	return null;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<Loader />}>
						<Welcome />
					</Suspense>
				),
				loader: checkAuth,
			},
			{
				path: "/main",
				element: (
					<Suspense fallback={<Loader />}>
						<Main />
					</Suspense>
				),
				loader: checkAuth,
			},
			{
				path: "/about",
				element: <About />,
				loader: checkAuth,
			},
			{
				path: "/favorite",
				element: <Favorite />,
				loader: checkAuth,
			},
			{
				path: "/photo/:id",
				element: <PhotoCard />,
				loader: checkAuth,
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
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/auth/register",
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
