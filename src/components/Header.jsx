import { Link, useLocation } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    if (path.startsWith('#')) return false
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-fuchsia-600" />
            <span className="text-white font-semibold tracking-wide">ECHO BOOKING</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm transition-colors ${isActive('/') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>
            <Link to="/artist" className={`text-sm transition-colors ${isActive('/artist') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}>Artist</Link>
            <a href="/#roster" className="text-sm text-gray-300 hover:text-white transition-colors">Our Rosters</a>
            <a href="/#releases" className="text-sm text-gray-300 hover:text-white transition-colors">Release</a>
            <Link to="/contact" className={`text-sm transition-colors ${isActive('/contact') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}>Contact Us</Link>
            <div className="ml-2 flex items-center gap-3 text-gray-300">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube size={18} /></a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
