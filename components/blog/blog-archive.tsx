import { ArchiveFilters } from "@/components/blog/archive/archive-filters"
import { ArchiveHero } from "@/components/blog/archive/archive-hero"
import { ArchivePostGrid } from "@/components/blog/archive/archive-post-grid"
import type { BlogPost } from "@/lib/content/blog-posts"

type BlogArchiveProps = {
  eyebrow: string
  title: string
  description: string
  posts: BlogPost[]
  activeCategory?: string
  activeTag?: string
}

export function BlogArchive({
  eyebrow,
  title,
  description,
  posts,
  activeCategory,
  activeTag,
}: BlogArchiveProps) {
  return (
    <main className="pt-24 md:pt-32">
      <ArchiveHero eyebrow={eyebrow} title={title} description={description} />
      <ArchiveFilters activeCategory={activeCategory} activeTag={activeTag} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ArchivePostGrid posts={posts} />
        </div>
      </section>
    </main>
  )
}
