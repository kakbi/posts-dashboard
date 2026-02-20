import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '../../entities/post/post.api';

export const PostsPage = () => {
    const { data, isLoading, isError, error } = useGetPostsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
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
