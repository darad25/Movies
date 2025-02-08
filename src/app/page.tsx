import { Search, Plus, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { MovieCard } from "@/components/movie-card"
import { ArtistCard } from "@/components/artist-card"
import { ContinueWatching } from "@/components/continue-watching"

const popularMovies = [
  {
    title: "Iron Man",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20100801-Y4IHDCd6722tmyhOVGFk7a0N6reNde.png",
    rating: "7.4",
    genres: ["Action", "Adventure"],
  },
  {
    title: "Love& Thunder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20100843-9Fv7of5GrL5lBlb66AFBGuPF6Umn4e.png",
    rating: "4.5",
    genres: ["Action", "Adventure"],
  },
  {
    title: "Man Of Steel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20100955-tX7fLVlEcnQ9Oo3LAxKkW3qFnRCEVF.png",
    rating: "2.8",
    genres: ["Action", "Adventure"],
  },
]

const favorites = [
  {
    title: "Badlands",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20101829-tgCICrXHQp0M3i4Yh905h5JIYJIJsr.png",
    rating: "7.5",
    genres: ["Adventure", "Fantasy"],
  },
  {
    title: "See",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20101950-6tviDep11rDa1sLzfAhK97CyPTizKc.png",
    rating: "7.8",
    genres: ["Action", "Adventure"],
  },
  {
    title: "Spiderman",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20102035-vnv0NTBHve8s5Mikfz3uRvVQJ7wqZJ.png",
    rating: "7.2",
    genres: ["Action", "Fantasy"],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] text-gray-900">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 px-8 py-6">
          {/* Categories */}
          <div className="mb-8 flex gap-8 border-b border-gray-200">
            <button className="border-b-2 border-transparent pb-4 text-gray-600 hover:border-gray-300">
              TV Series
            </button>
            <button className="border-b-2 border-red-600 pb-4 font-medium">Movies</button>
            <button className="border-b-2 border-transparent pb-4 text-gray-600 hover:border-gray-300">Animes</button>
          </div>

          {/* Featured Movie */}
          <div className="relative mb-12 overflow-hidden rounded-2xl">
            <div className="relative aspect-[2/1]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20100449-aozzCIfASe3nesoyjVNdA1IbQF9T33.png"
                alt="A Tribe Called Judah"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="mb-2 text-sm">Comedy, Action, Drama</p>
              <h2 className="mb-4 text-4xl font-bold">A TRIBE CALLED JUDAH</h2>
              <div className="flex gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Play className="mr-2 h-4 w-4" />
                  Watch
                </Button>
                <Button variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Best Artists */}
          <div className="mb-12">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Best Artists</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <ArtistCard
                title="KESARI"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20093611-EUPg4rQMiJJnUzBlZ3mwCXi93eLvbv.png"
              />
              <ArtistCard
                title="MAN IN BLACK"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20094329-tx3DhD86CcodplKmdlh5Zd9qi373KU.png"
              />
              <ArtistCard
                title="AQUAMAN"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20094449-axpiP2UBcaF1yr06QcUvLPMMqssxXb.png"
              />
              <ArtistCard
                title="INCEPTION"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20094506-K0p6cubsDER61aCrr4EJRfNtqnoYaW.png"
              />
            </div>
          </div>

          {/* Continue Watching */}
          <div className="mb-12">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Continue Watching</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ContinueWatching
                title="Lisabi"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20094928-767vU31kDMf6HZBCKu39R8EBSjAseb.png"
                progress={75}
              />
              <ContinueWatching
                title="Ajosepo"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20095330-5DymxJnx5M6TVI0L1pXx8devNekMgS.png"
                progress={30}
              />
              <ContinueWatching
                title="Blood Sisters"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20095344-EvkEZr8iEP6ZfyWkHPtkcemHDoBDnm.png"
                progress={50}
              />
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-gray-200 px-6 py-6">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="pl-9" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Movies</h3>
              <div className="space-y-4">
                {popularMovies.map((movie) => (
                  <MovieCard key={movie.title} {...movie} />
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full bg-red-600 text-white hover:bg-red-700">
                See More
              </Button>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Favorites</h3>
              <div className="space-y-4">
                {favorites.map((movie) => (
                  <MovieCard key={movie.title} {...movie} />
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full bg-red-600 text-white hover:bg-red-700">
                See More
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

