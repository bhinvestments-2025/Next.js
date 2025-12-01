import Link from 'next/link'
import { getAllProperties } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'

export const metadata = {
  title: 'Property Portfolio - GOBH Investments',
  description: 'Browse our real estate investment properties',
}

export default async function PortfolioPage() {
  const properties = await getAllProperties()

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Property Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of investment properties across New York City
          </p>
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No properties available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
