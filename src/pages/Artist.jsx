import Header from '../components/Header'
import Footer from '../components/Footer'

function Artist() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Header />

      {/* Artist Banner */}
      <section className="relative">
        <div className="h-[40vh] md:h-[50vh] w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2069&auto=format&fit=crop" alt="Artist banner" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0b0b0f]" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">ARTIST NAME</h1>
        </div>
      </section>

      {/* Bio + Socials */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">Bio</h2>
            <p className="text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra nibh sed turpis tincidunt, non posuere nibh consequat. Sed id luctus arcu. Donec et nibh nec mauris mattis tincidunt. Integer aliquet, risus ac hendrerit accumsan, nibh metus luctus lectus, non varius arcu massa non nisi. Curabitur egestas libero turpis, vitae viverra ipsum egestas vitae.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Social Links</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#" className="block hover:text-white">Instagram</a>
              <a href="#" className="block hover:text-white">Facebook</a>
              <a href="#" className="block hover:text-white">Twitter</a>
              <a href="#" className="block hover:text-white">YouTube</a>
            </div>
            <a href="#book" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 font-medium hover:opacity-90">Book Now</a>
          </div>
        </div>
      </section>

      {/* Photo Gallery (no video gallery, no soundcloud, no label) */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img src={`https://picsum.photos/seed/gallery${i}/600/400`} alt="Gallery" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Artist
