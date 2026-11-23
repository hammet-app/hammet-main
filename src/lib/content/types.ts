export type Author = {
  name: string
  role?: string
  bio?: string
  photo?: string
  linkedin?: string
  x?: string
}

export type Category = {
  title: string
  slug: string
}

export type Post = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  coverImage?: { url: string; alt: string; caption?: string }
  content: string
  author?: Author
  category?: Category
  tags?: string[]
  featured?: boolean
  seoTitle?: string
  seoDescription?: string
  publishedAt?: string
}

export type PublicPostDto = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image_url: string | null
  cover_image_alt: string | null
  cover_image_caption: string | null
  author_name: string
  author_role: string | null
  author_bio: string | null
  author_photo_url: string | null
  author_linkedin: string | null
  author_x: string | null
  category: string | null
  tags: string[]
  featured: boolean
  seo_title: string | null
  seo_description: string | null
  published_at: string
}
