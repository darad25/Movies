import { ShoppingCart, Heart, User, Search, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { ProductGallery } from "@/components/product-gallery"
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="text-xl font-bold">
            OZZ<span className="text-pink-500">YY</span>
          </div>

          <div className="hidden flex-1 max-w-xl px-8 lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="w-full pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Navigation />
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <span>Clothes and shoes</span>
          <span>›</span>
          <span>Shoes</span>
          <span>›</span>
          <span>ozzyy</span>
        </div>
      </div>

      {/* Product Section */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductGallery />

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250122-WA0031.jpg-MqIC1zuJmfckxPrdnCroPeOBQRFrGg.jpeg"
                  alt="Ozzyy logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">
                  OZZ<span className="text-pink-500">YY</span>
                </div>
                <div className="text-sm text-gray-500">HR1325R00-8</div>
              </div>
            </div>

            <h1 className="text-2xl font-bold">Ozzyy Stylish loafer vee Custom Force 1</h1>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {"★★★★☆".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">42 Reviews</span>
            </div>

            <div className="text-3xl font-bold">$199.00</div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Colour</label>
                <ColorSelector />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Size</label>
                  <button className="text-sm text-gray-600 underline">EU Women</button>
                </div>
                <SizeSelector />
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-black text-white hover:bg-black/90">Add to cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="h-4 w-4" />
              Free delivery on orders over $30.0
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

