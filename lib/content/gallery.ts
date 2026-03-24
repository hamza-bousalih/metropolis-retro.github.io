export interface GalleryImage {
  id: string
  title: string
  description?: string
  imageUrl: string
  aspect: "square" | "portrait" | "landscape" | "wide"
  category?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Tournament Day",
    description: "Annual club championship with competitive players",
    imageUrl: "https://images.unsplash.com/photo-1570303008227-b00fd9b8f8f5?w=800&q=80",
    aspect: "square",
    category: "tournaments",
  },
  {
    id: "2",
    title: "Training Session",
    description: "Weekly training with experienced coaches",
    imageUrl: "https://images.unsplash.com/photo-1573514159098-0a9d40f49eba?w=600&q=80",
    aspect: "portrait",
    category: "training",
  },
  {
    id: "3",
    title: "Club Members",
    description: "Community gathering at our meeting space",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=80",
    aspect: "wide",
    category: "community",
  },
  {
    id: "4",
    title: "Strategic Analysis",
    description: "In-depth game analysis sessions",
    imageUrl: "https://images.unsplash.com/photo-1551943921-8ae8e9324ccb?w=500&q=80",
    aspect: "square",
    category: "training",
  },
  {
    id: "5",
    title: "Evening Tournament",
    description: "Friendly rapid chess tournament",
    imageUrl: "https://images.unsplash.com/photo-1578674387457-1da6858b0e87?w=700&q=80",
    aspect: "landscape",
    category: "tournaments",
  },
  {
    id: "6",
    title: "Youth Program",
    description: "Next generation of chess players",
    imageUrl: "https://images.unsplash.com/photo-1604866830529-5472fed378f4?w=600&q=80",
    aspect: "portrait",
    category: "youth",
  },
  {
    id: "7",
    title: "Club Championship",
    description: "Final round of the championship series",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    aspect: "square",
    category: "tournaments",
  },
  {
    id: "8",
    title: "Interactive Session",
    description: "Live board demonstrations and coaching",
    imageUrl: "https://images.unsplash.com/photo-1545521521-79aa0bde4d00?w=1000&q=80",
    aspect: "wide",
    category: "community",
  },
  {
    id: "9",
    title: "Team Match",
    description: "Inter-club team competition",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=700&q=80",
    aspect: "landscape",
    category: "tournaments",
  },
]

export const galleryCategories = Array.from(new Set(galleryImages.map((img) => img.category).filter(Boolean))) as string[]

export function getGalleryImagesByCategory(category: string) {
  return galleryImages.filter((img) => img.category === category)
}
