import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '../../entities/post/post.api';
import { Loader } from '../../ui/loader/Loader';
import { ErrorMessage } from '../../ui/error-message/ErrorMessage';
import { CreatePostForm } from '../../features/create-post';

export const PostsPage = () => {
    const { data, isLoading, isError, error } = useGetPostsQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <ErrorMessage message={JSON.stringify(error)} />;
    }

    return (
        <div>
            <h1>Posts</h1>
            <CreatePostForm />

            <ul>
                {data?.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
