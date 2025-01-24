"use client"

import { useState } from "react"
import Image from "next/image"

const colors = [
  {
    id: "white",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  },
  {
    id: "white-alt",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  },
  {
    id: "white-alt-2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20181004-CoFBnXK5kCGpJTMyhoMpmW1STroIpP.png",
  },
]

export function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("white")

  return (
    <div className="mt-2 flex gap-2">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color.id)}
          className={`relative h-16 w-16 overflow-hidden rounded-lg ${
            selectedColor === color.id ? "ring-2 ring-black" : "border"
          }`}
        >
          <Image src={color.image || "/placeholder.svg"} alt={`Color ${color.id}`} fill className="object-cover" />
        </button>
      ))}
    </div>
  )
}

