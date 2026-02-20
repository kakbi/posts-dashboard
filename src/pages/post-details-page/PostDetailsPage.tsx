import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../entities/post/post.api';

export const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: post,
        isLoading,
        isError,
    } = useGetPostByIdQuery(Number(id), {
        skip: !id,
    });

    if (!id) {
        return <div>Invalid post id</div>;
    }

    if (isLoading) return <div>Loading post...</div>;
    if (isError) return <div>Error loading post</div>;

    return (
        <div>
            <Link to="/">Back</Link>

            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    );
};
