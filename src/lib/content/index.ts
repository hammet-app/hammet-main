import type { Post, PublicPostDto } from './types'

const API_BASE = process.env.NEXT_PUBLIC_API_URL

function toPost(dto: PublicPostDto): Post {
  return {
    _id: dto.id,
    title: dto.title,
    slug: dto.slug,
    excerpt: dto.excerpt ?? undefined,
    coverImage: dto.cover_image_url ? { url: dto.cover_image_url, alt: dto.cover_image_alt ?? '', caption: dto.cover_image_caption ?? undefined } : undefined,
    content: dto.content,
    author: dto.author_name ? {
      name: dto.author_name,
      role: dto.author_role ?? undefined,
      bio: dto.author_bio ?? undefined,
      photo: dto.author_photo_url ?? undefined,
      linkedin: dto.author_linkedin ?? undefined,
      x: dto.author_x ?? undefined,
    } : undefined,
    category: dto.category ? { title: dto.category, slug: dto.category.toLowerCase().replace(/\s+/g, '-') } : undefined,
    tags: dto.tags,
    featured: dto.featured,
    seoTitle: dto.seo_title ?? undefined,
    seoDescription: dto.seo_description ?? undefined,
    publishedAt: dto.published_at,
  }
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, { next: { revalidate: 60 } })
  if (!response.ok) throw new Error(`Blog API returned ${response.status}`)
  return response.json() as Promise<T>
}

export async function getPosts(): Promise<Post[]> {
  try {
    const result = await getJson<{ posts: PublicPostDto[] }>('/blog?page_size=100')
    return result.posts.map(toPost)
  } catch (error) {
    console.warn('Failed to fetch blog posts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return toPost(await getJson<PublicPostDto>(`/blog/${encodeURIComponent(slug)}`))
  } catch (error) {
    console.warn('Failed to fetch blog post:', error)
    return null
  }
}

export async function getRelatedPosts(slug: string): Promise<Post[]> {
  try {
    const result = await getJson<PublicPostDto[]>(`/blog/related/${encodeURIComponent(slug)}`)
    return result.map(toPost)
  } catch (error) {
    console.warn('Failed to fetch related blog posts:', error)
    return []
  }
}
