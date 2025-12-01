import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            GOBH Investments
          </Link>
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
