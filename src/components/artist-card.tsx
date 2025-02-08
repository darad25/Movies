import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArtistCardProps {
  title: string
  image: string
}

export function ArtistCard({ title, image }: ArtistCardProps) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <Button
        variant="outline"
        size="icon"
        className="absolute right-3 top-3 border-white bg-white/20 text-white hover:bg-white/30"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}