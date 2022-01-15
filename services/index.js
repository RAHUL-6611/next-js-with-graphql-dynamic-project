import {request, gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async ()=>{

    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI,query);
    // console.log(result)
    return result.postsConnection.edges;

}

export const getCategories = async ()=>{
    const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const getFeaturedPosts = async ()=>{
  const query = gql`
  query GetCategoryPost() {
    posts(where: {featuredPost: true}) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      createdAt
    }
  }  
  `
  const result = await request(graphqlAPI,query);
  console.log(result)
  return result.posts;
}