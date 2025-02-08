import { Home, Users, Compass, Calendar, Film, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-60 border-r border-gray-200 px-6 py-6">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-red-600">
          <span className="text-2xl">◆</span> Toblerone.
        </Link>
      </div>

      <nav className="space-y-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">MENU</p>
          <div className="space-y-1">
            <Link href="#" className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-red-600">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">Social</p>
          <div className="space-y-1">
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <Users className="h-4 w-4" />
              Community
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <Compass className="h-4 w-4" />
              Discovery
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <Calendar className="h-4 w-4" />
              Coming soon
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <Film className="h-4 w-4" />
              Media
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">GENERAL</p>
          <div className="space-y-1">
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <LogOut className="h-4 w-4" />
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}