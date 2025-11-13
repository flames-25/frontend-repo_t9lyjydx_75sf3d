import Spline from '@splinetool/react-spline'
import Header from '../components/Header'
import Footer from '../components/Footer'

const artists = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `ARTIST NAME ${i + 1}`,
  logo: `https://picsum.photos/seed/logo${i}/600/600`,
  photo: `https://picsum.photos/seed/photo${i}/600/600`,
}))

function Homepage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Header />

      {/* Hero with Spline */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0b0b0f] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-10 mx-auto max-w-5xl text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300">
            WELCOME TO ECHO BY ECHO BOOKING
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Discover our roster, releases, and the world of electronic music talent.</p>
        </div>
      </section>

      {/* Roster Poster */}
      <section id="roster" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2069&auto=format&fit=crop" alt="Artist Roster 2025" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* NEW ARTIST GRID */}
      <section className="py-6 sm:py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {artists.map((a) => (
              <a key={a.id} href={`/artist/${a.id}`} className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#12121a] to-[#0d0d14] border border-white/10">
                <img src={a.logo} alt={`${a.name} logo`} className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300" loading="lazy" />
                <img src={a.photo} alt={`${a.name} photo`} className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                  <span className="inline-block px-2 py-1 rounded bg-black/50 backdrop-blur text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{a.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Releases with YouTube playlist */}
      <section id="releases" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Releases</h2>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/videoseries?list=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde" title="YouTube playlist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Homepage
