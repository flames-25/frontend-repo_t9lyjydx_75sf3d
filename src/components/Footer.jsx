function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-white text-2xl font-semibold tracking-wide">BE THE FIRST TO KNOW</h3>
          <p className="mt-2 text-sm text-gray-400">Subscribe for the latest updates, releases and roster news.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="w-full max-w-sm bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">Subscribe</button>
          </form>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded bg-gradient-to-br from-purple-500 to-fuchsia-600" />
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ECHO BOOKING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
