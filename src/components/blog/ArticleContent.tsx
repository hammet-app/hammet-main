import type { Post } from '@/lib/content/types'

export default function ArticleContent({content}: {content: Post['content']}) {
  return <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:text-purple-dark prose-p:text-gray-700 prose-p:leading-8 prose-a:text-purple prose-a:no-underline hover:prose-a:underline prose-strong:text-purple-dark prose-blockquote:border-cyan prose-blockquote:text-purple-dark" dangerouslySetInnerHTML={{ __html: content }} />
}
