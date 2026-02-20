import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../entities/post/post.api';
import { Loader } from '../../ui/loader/Loader';
import { ErrorMessage } from '../../ui/error-message/ErrorMessage';

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
        return <ErrorMessage message="Invalid post id" />;
    }

    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage />;

    return (
        <div>
            <Link to="/">Back</Link>

            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    );
};
