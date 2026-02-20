import { createBrowserRouter } from 'react-router-dom';
import { PostsPage } from '../pages/posts-page';
import { PostDetailsPage } from '../pages/post-details-page';
import { Layout } from '../ui/layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <PostsPage />
            </Layout>
        ),
    },
    {
        path: '/posts/:id',
        element: (
            <Layout>
                <PostDetailsPage />
            </Layout>
        ),
    },
]);
