import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArchive } from "@/components/blog/blog-archive"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import {
  getBlogCategoryArchiveBySlug,
  getBlogCategoryMetadata,
  getBlogCategoryStaticParams,
} from "@/lib/blog/archive"

type BlogCategoryPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogCategoryStaticParams()
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  return getBlogCategoryMetadata(slug)
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params
  const archive = getBlogCategoryArchiveBySlug(slug)

  if (!archive) {
    notFound()
  }

  return (
    <>
      <Header />
      <BlogArchive {...archive} />
      <Footer />
    </>
  )
}
