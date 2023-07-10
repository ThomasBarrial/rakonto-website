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

export const getHomePageContent = groq`
*[_type == "homePageData"] {
    ...,
} 
`;

export const getAllArticles = groq`
*[_type == "articles"] {
    ...,
    author->,
    subjects[]->
} | order(publishedAt desc)`;

export const getAllArticlesSlug = groq`
*[_type == "articles"] {
slug
}`;

export const getOneArticle = groq`
*[_type == "articles" && slug.current == $slug][0] {
  ...,
  author->,
 subjects[]->
}`;
