import { createBrowserRouter } from 'react-router-dom';
import { PostsPage } from '../pages/posts-page';
import { PostDetailsPage } from '../pages/post-details-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PostsPage />,
    },
    {
        path: '/posts/:id',
        element: <PostDetailsPage />,
    },
]);
