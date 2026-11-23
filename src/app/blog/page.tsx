import BlogHero from '@/components/blog/BlogHero'
import FeaturedPost from '@/components/blog/FeaturedPost'
import PostGrid from '@/components/blog/PostGrid'
import {getPosts} from '@/lib/content'
import { Post } from '@/lib/content/types'
import { BookOpenText } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getPosts()

  const featuredPost =
    posts.find((post: Post) => post.featured) ?? posts[0]

  const remainingPosts = featuredPost
    ? posts.filter((post: Post) => post._id !== featuredPost._id)
    : []

  return (
    <main className="min-h-screen bg-gray-50">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {posts.length === 0 && (
          <section className="mx-auto max-w-2xl rounded-3xl border border-purple-light bg-white px-6 py-14 text-center shadow-sm sm:px-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-light text-purple">
              <BookOpenText className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-purple-dark sm:text-3xl">
              The journal is getting ready
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              We’re preparing our first stories on AI, learning, and the future of work. Check back soon for new ideas from Hammet.
            </p>
          </section>
        )}
        {featuredPost && (
          <section>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-dark">
                Featured
              </p>

              <h2 className="mt-2 font-serif text-3xl tracking-tight text-purple-dark sm:text-4xl">
                Start here
              </h2>
            </div>

            <FeaturedPost post={featuredPost} />
          </section>
        )}

        {remainingPosts.length > 0 && (
          <section className="mt-20">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-dark">
                Latest
              </p>

              <h2 className="mt-2 font-serif text-3xl tracking-tight text-purple-dark sm:text-4xl">
                From the journal
              </h2>
            </div>

            <PostGrid posts={remainingPosts} />
          </section>
        )}
      </section>
    </main>
  )
}
