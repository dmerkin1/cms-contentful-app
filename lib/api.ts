const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  overlayEnabled
  category {
    ... on BlogCategory {
      categoryName
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        next: { tags: ["posts"] },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching the GraphQL data:", error);
    throw error;
  }
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPosts(
  isDraftMode: boolean,
  page = 1,
  limit = 10
): Promise<any[]> {
  const skip = (page - 1) * limit;

  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }, skip: ${skip}, limit: ${limit}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 3) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

export async function getAllTestimonials(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      testimonialCollection {
        items {
          name 
          image {
            url
          }
          location
          testimonial {
            json
          }
          product
        }
      }
    }`
  );
  return entries?.data?.testimonialCollection?.items;
}

export async function getFooterText(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      footerCollection {
        items {
          maxWidth
          content {
            json
          }
        }
      }
    }`
  );
  return entries?.data?.footerCollection?.items[0];
}

export async function getLinks(): Promise<any> {
  const entries = await fetchGraphQL(
    `query { 
      linkCollection {
        items {
          href
          label
          subMenuCollection {
            items {
              href
              label
            }
          }
        }
      }
    }`
  );
  return entries?.data?.linkCollection?.items;
}

export async function getCards(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      cardCollection {
        items {
          title
          subText
          customIcon {
            url
          }
        }
      }
    }`
  );
  return entries?.data?.cardCollection?.items;
}

export async function getHeroImage(): Promise<any> {
  try {
    const entries = await fetchGraphQL(
      `query {
        heroImageCollection {
          items {
            headline
            darkenImage
            subText {
              json
            }
            image {
              ... on ImageWithFocalPoint {
                image {
                  url
                }
                focalPoint
                altText
              }
            }
          }
        }
      }`
    );
    return entries?.data?.heroImageCollection?.items;
  } catch (error) {
    console.error("An error occurred while fetching the hero image:", error);
  }
}

export async function getLogo(): Promise<any> {
  try {
    const entries = await fetchGraphQL(
      `query {
        imageWithFocalPointCollection {
          items {
            image {
              url
              title
            }
          }
        }
      }`
    );
    return entries?.data?.imageWithFocalPointCollection?.items[3];
  } catch (error) {
    console.error("An error occurred while fetching the logo:", error);
  }
}

export async function getLogoInverse(): Promise<any> {
  try {
    const entries = await fetchGraphQL(
      `query {
        imageWithFocalPointCollection {
          items {
            image {
              url
              title
            }
          }
        }
      }`
    );
    return entries?.data?.imageWithFocalPointCollection?.items[2];
  } catch (error) {
    console.error("An error occurred while fetching the logo:", error);
  }
}

export async function howWeWork(): Promise<any> {
  try {
    const entries = await fetchGraphQL(
      `query {
        howWeWorkCollection {
          items {
            title
            text
            image {
              url
            }
          }
        }
      }`
    );
    return entries?.data?.howWeWorkCollection?.items;
  } catch (error) {
    console.error("An error occurred while fetching how we work data:", error);
  }
}
