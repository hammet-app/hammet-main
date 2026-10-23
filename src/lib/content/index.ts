import {client} from './sanity'
import {postsQuery, postQuery, relatedPostsQuery} from './queries'
import type {Post} from './types'

const isConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id'
)

export async function getPosts(): Promise<Post[]> {
  try {
    if (!isConfigured) {
      return []
    }
    return await client.fetch(postsQuery, {}, {
      next: {
        revalidate: 60,
      },
    })
  } catch (err) {
    console.warn('Failed to fetch posts from Sanity:', err)
    return []
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    if (!isConfigured) {
      return null
    }
    return await client.fetch(postQuery, {slug}, {
      next: {
        revalidate: 60,
      },
    })
  } catch (err) {
    console.warn('Failed to fetch post from Sanity:', err)
    return null
  }
}

export async function getRelatedPosts(
  categoryId: string,
  postId: string,
): Promise<Post[]> {
  try {
    if (!isConfigured) {
      return []
    }
    return await client.fetch(relatedPostsQuery, {
      categoryId,
      postId,
    })
  } catch (err) {
    console.warn('Failed to fetch related posts from Sanity:', err)
    return []
  }
}
