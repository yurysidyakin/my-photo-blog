import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader.tsx';
import './index.css';
import Layout from './layout/Layout/Layout.tsx';
import About from './pages/About/About.tsx';
import Error from './pages/Error/Error.tsx';
import PhotoCard from './pages/PhotoCard/Photo.tsx';

const Main = lazy(() => import('./pages/Main/Main.tsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,

		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<Loader />}>
						<Main />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/photo/:id',
				element: <PhotoCard />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
