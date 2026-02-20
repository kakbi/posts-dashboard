import { useState } from 'react';
import { useCreatePostMutation } from '../../entities/post/post.api';
import { Loader } from '../../ui/loader/Loader';
import { ErrorMessage } from '../../ui/error-message/ErrorMessage';

export const CreatePostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [createPost, { isLoading, isError }] = useCreatePostMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createPost({
                title,
                body,
                userId: 1,
            }).unwrap();

            setTitle('');
            setBody('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>

            <div>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>

            <button type="submit" disabled={isLoading}>
                Create
            </button>

            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
        </form>
    );
};
