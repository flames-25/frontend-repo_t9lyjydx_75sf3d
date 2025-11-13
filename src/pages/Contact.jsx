import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Header />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Contact Us & Booking</h1>
          <form action="mailto:[הכנס כאן את המייל של ערן]" method="post" encType="text/plain" className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Subject</label>
              <input type="text" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Booking inquiry" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea name="message" rows="6" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell us about your event"></textarea>
            </div>
            {/* Fake reCAPTCHA placeholder for prototype */}
            <div className="bg-white/5 border border-white/10 rounded-md p-4 flex items-center gap-3">
              <input type="checkbox" required className="h-5 w-5" id="recaptcha" />
              <label htmlFor="recaptcha" className="text-sm text-gray-300">I'm not a robot</label>
            </div>

            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 font-medium hover:opacity-90">Send</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
