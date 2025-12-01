import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            GOBH Investments
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Building communities through strategic real estate investments across New York City
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Our Portfolio
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-4">7+</div>
              <h3 className="text-xl font-semibold mb-2">Properties</h3>
              <p className="text-gray-600">Across NYC neighborhoods</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-4">5+</div>
              <h3 className="text-xl font-semibold mb-2">Locations</h3>
              <p className="text-gray-600">Strategic market presence</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-4">Years</div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">In real estate investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Properties
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our diverse portfolio of residential and commercial properties
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
