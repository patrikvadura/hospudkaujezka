export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_API || 'http://localhost:1337'}${path}`;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(1), time));


// const endpoint:string|undefined = process.env.NEXT_PUBLIC_API;

// async function fetchFromApi(query: string, variables: any = null) {
//     if (!endpoint) {
//         throw new Error("HYGRAPH_ENDPOINT environment variable not set");
//     }
//
//     const response: Response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ query, variables }),
//     });
//
//     const json = await response.json();
//
//     return json.data;
// }


// export async function getPosts(): Promise<Post[]> {
//     const response = await fetchFromApi(`
//         query Posts {
//           posts {
//             data {
//               id
//               attributes {
//                 slug
//                 title
//                 excerpt
//                 coverImage {
//                   data {
//                     id
//                     attributes {
//                       url
//                       alternativeText
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//     `);
//
//     return response.posts.data;
// }
//
// export async function getPost(id: string): Promise<PostData> {
//     const response = await fetchFromApi(`
//             query Post($id: ID!) {
//                 post(id: $id) {
//                     data {
//                       id
//                       attributes {
//                         slug
//                         title
//                         excerpt
//                         content
//                         coverImage {
//                           data {
//                             id
//                             attributes {
//                               url
//                               alternativeText
//                             }
//                           }
//                         }
//                       }
//                     }
//                 }
//             }
//         `, { id }
//     );
//
//     if (response && response.post) {
//         return response.post.data;
//     } else {
//         return {} as PostData;
//     }
// }
//
// export async function getPages(): Promise<Page[]> {
//     const data = await fetchFromApi(`
//         query Pages {
//           pages {
//             data {
//               id
//               attributes {
//                 slug
//                 title
//               }
//             }
//           }
//         }
//     `);
//
//     return data.pages.data;
// }
//
// export async function getPage(id: string): Promise<PageData> {
//     const response = await fetchFromApi(
//         `
//             query Page($id: ID!) {
//                 page(id: $id) {
//                     data {
//                       id
//                       attributes {
//                         slug
//                         title
//                         content
//                         seoTitle
//                         seoDescription
//                         ogImage {
//                           data {
//                             id
//                             attributes {
//                               url
//                             }
//                           }
//                         }
//                       }
//                     }
//                 }
//             }
//         `,
//         { id }
//     );
//
//     if (response && response.page) {
//         return response.page.data;
//     } else {
//         return {} as PageData;
//     }
// }
