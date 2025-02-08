import Image from "next/image"

interface MovieCardProps {
  title: string
  image: string
  rating: string
  genres: string[]
}

export function MovieCard({ title, image, rating, genres }: MovieCardProps) {
  return (
    <div className="flex gap-3">
      <div className="relative h-20 w-14 overflow-hidden rounded-lg">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{genres.join(", ")}</p>
        <div className="mt-1 inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium">
          IMDb {rating}
        </div>
      </div>
    </div>
  )
}

