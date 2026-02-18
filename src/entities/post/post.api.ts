import { api } from '../../shared/api/api';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: ['Post'],
        }),

        getPostById: builder.query<Post, number>({
            query: (id) => `/posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),

        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: '/posts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } =
    postApi;
