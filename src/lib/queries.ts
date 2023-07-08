import { groq } from 'next-sanity';

export const getAllPosts = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
} | order(publishedAt desc)
`;

export const getAllDesktopNavigationLinks = groq`
*[_type == "desktopNavigationLinks"] {
    ...,
} | order(orderPlace asc)
`;

export const getAllNavigationLinks = groq`
*[_type == "navigationLinks"] {
    ...,
} | order(orderPlace asc)
`;

export const getAllSocialMedia = groq`
*[_type == "socialMedia"] {
    ...,
} 
`;
