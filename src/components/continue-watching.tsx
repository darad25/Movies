import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContinueWatchingProps {
  title: string
  image: string
  progress: number
}

export function ContinueWatching({ title, image, progress }: ContinueWatchingProps) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <Button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
        size="icon"
      >
        <Play className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-3 left-3 right-3">
        <h4 className="mb-2 font-medium text-white">{title}</h4>
        <div className="h-1 overflow-hidden rounded-full bg-white/20">
          <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}