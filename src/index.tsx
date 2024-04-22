import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Test } from './pages';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/test',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: <div>404</div>,
    },
]);

container.render(<RouterProvider router={router} />);
