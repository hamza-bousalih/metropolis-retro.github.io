import type { Metadata } from "next"

import { BlogArchive } from "@/components/blog/blog-archive"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { blogIndexMetadata, blogIndexViewModel } from "@/lib/blog/archive"

export const metadata: Metadata = blogIndexMetadata

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogArchive {...blogIndexViewModel} />
      <Footer />
    </>
  )
}
