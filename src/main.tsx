import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader.tsx';
import './index.css';
import About from './pages/About/About.tsx';
import Error from './pages/Error/Error.tsx';

const Main = lazy(() => import('./pages/Main/Main.tsx'));

const router = createBrowserRouter([
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
		path: '*',
		element: <Error />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
