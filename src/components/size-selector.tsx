"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const sizes = ["40.5", "41", "42", "43", "42.5", "44", "44.5", "45", "46"]

export function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState("41")

  return (
    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "outline"}
          className={`w-full ${selectedSize === size ? "bg-black text-white" : ""}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  )
}

