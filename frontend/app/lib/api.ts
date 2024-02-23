export type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: {
        url: string;
        altText: string;
    };
}

export type PostData = {
    createdAt: Date;
    id: string;
    slug: string;
    publishedAt: Date;
    title: string;
    updatedAt: Date;
    content: {
        json: string;
        html: string;
    };
    seoOverride: {
        description: string;
        title: string;
        image: {
            url: string;
        };
    };
};

export type Page = {
    id: string;
    slug: string;
    title: string;
}

export type PageData = {
    id: string;
    slug: string;
    title: string;
    content: {
        html: string;
    };
    seoOverride: {
        description: string;
        title: string;
        image: {
            url: string;
        };
    };
};

export type Navigation = {
    id: string;
    link: {
        id: string;
        externalUrl: string;
        displayText: string;
        page: {
            id: string;
            slug: string;
        };
    }[];
}

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

async function fetchFromApi(query: string, variables: any = null) {
    if (!endpoint) {
        throw new Error("HYGRAPH_ENDPOINT environment variable not set");
    }

    const response: Response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    return json.data;
}

export async function getPosts(): Promise<Post[]> {
    const data = await fetchFromApi(`
        query Posts {
            posts {
                id
                slug
                title
                excerpt
                coverImage {
                    url
                    altText
                }
            }
        }
    `);

    return data.posts;
}

export async function getPost(slug: string): Promise<PostData> {
    const data = await fetchFromApi(
        `
            query Post($slug: String!) {
                post(where: {slug: $slug}) {
                    createdAt
                    id
                    slug
                    publishedAt
                    title
                    updatedAt
                    content {
                      json
                      html
                    }
                    seoOverride {
                      description
                      title
                      image {
                        url
                      }
                    }
                }
            }
        `,
        { slug }
    );

    return data.post;
}

export async function getPages(): Promise<Page[]> {
    const data = await fetchFromApi(`
        query Pages {
            pages {
                id
                slug
                title
            }
        }
    `);

    return data.pages;
}

export async function getPage(slug: string): Promise<PageData> {
    const data = await fetchFromApi(
        `
            query Page($slug: String!) {
                page(where: {slug: $slug}) {
                    id
                    slug
                    title
                    content {
                        html
                    }
                    seoOverride {
                        description
                        title
                        image {
                            url
                        }
                    }
                }
            }
        `,
        { slug }
    );

    return data.page;
}

export async function getNavigations(): Promise<Navigation[]> {
    const data = await fetchFromApi(`
        query Navigations {
          navigations {
            id
            link {
              id
              externalUrl
              displayText
              page {
                ... on Page {
                  id
                  slug
                }
              }
            }
          }
        }
    `);

    return data.navigations;
}

