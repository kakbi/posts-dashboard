import { createBrowserRouter } from 'react-router-dom';
import { PostsPage } from '../posts-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PostsPage />,
    },
]);
