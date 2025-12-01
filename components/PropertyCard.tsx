import Link from 'next/link'
import Image from 'next/image'

interface PropertyCardProps {
  property: {
    slug: string
    title: string
    location?: string
    featuredImage?: string
    excerpt?: string
    propertyType?: string
    status?: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/portfolio/${property.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {property.featuredImage ? (
          <div className="relative h-64 w-full">
            <Image
              src={property.featuredImage}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-64 w-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {property.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            {property.title}
          </h3>
          {property.location && (
            <p className="text-gray-600 mb-2">📍 {property.location}</p>
          )}
          {property.propertyType && (
            <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full capitalize">
              {property.propertyType}
            </span>
          )}
          {property.excerpt && (
            <p className="mt-4 text-gray-700 line-clamp-3">{property.excerpt}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
