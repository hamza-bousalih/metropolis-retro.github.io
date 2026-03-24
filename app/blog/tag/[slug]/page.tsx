import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArchive } from "@/components/blog/blog-archive"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import {
  getBlogTagArchiveBySlug,
  getBlogTagMetadata,
  getBlogTagStaticParams,
} from "@/lib/blog/archive"

type BlogTagPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogTagStaticParams()
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { slug } = await params
  return getBlogTagMetadata(slug)
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { slug } = await params
  const archive = getBlogTagArchiveBySlug(slug)

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
