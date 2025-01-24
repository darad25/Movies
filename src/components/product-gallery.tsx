"use client"

import { useState } from "react"
import Image from "next/image"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-pink-50">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-20 overflow-hidden rounded-lg ${
              selectedImage === index ? "ring-2 ring-black" : ""
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
        <button className="aspect-square w-20 rounded-lg border text-sm">+5 more</button>
      </div>
    </div>
  )
}

