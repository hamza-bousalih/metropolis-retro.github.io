import type { Metadata } from "next"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { SITE_URL, pageKeywords } from "@/lib/seo"
import { galleryImages } from "@/lib/content/gallery"

export const metadata: Metadata = {
  title: "Gallery | Metropolis Retro Chess Club",
  description:
    "Explore our photo gallery showcasing tournaments, training sessions, community events, and members of Metropolis Retro chess club in Brisbane.",
  keywords: pageKeywords(["chess club gallery", "tournament photos", "chess training images"]),
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Metropolis Retro Chess Club",
    description:
      "Browse photos from our tournaments, training sessions, and community gatherings at Metropolis Retro.",
    url: `${SITE_URL}/gallery`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Metropolis Retro Chess Club",
    description:
      "Browse photos from our tournaments, training sessions, and community gatherings at Metropolis Retro.",
  },
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Visual Archive</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">Gallery</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Discover moments from our tournaments, training sessions, and community events at Metropolis Retro.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <GalleryGrid images={galleryImages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
