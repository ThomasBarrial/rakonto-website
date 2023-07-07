import { groq } from 'next-sanity';

export const getAllPosts = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
} | order(publishedAt desc)
`;

export default getAllPosts;
