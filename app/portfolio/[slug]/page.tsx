import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProperties, getPropertyBySlug } from '@/lib/properties'

export async function generateStaticParams() {
  const properties = await getAllProperties()
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)
  
  if (!property) {
    return {
      title: 'Property Not Found',
    }
  }

  return {
    title: `${property.title} - GOBH Investments`,
    description: property.excerpt || property.description,
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-primary hover:text-secondary mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.title}</h1>
          {property.location && (
            <p className="text-xl text-gray-600 mb-2">
              📍 {property.location}
            </p>
          )}
          {property.propertyType && (
            <p className="text-gray-500 capitalize">
              {property.propertyType} Property
            </p>
          )}
        </div>

        {/* Featured Image */}
        {property.featuredImage && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.featuredImage}
              alt={property.title}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Property Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {property.status && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
              <p className="text-lg capitalize">{property.status}</p>
            </div>
          )}
          {property.address && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
              <p className="text-lg">{property.address}</p>
            </div>
          )}
          {property.yearAcquired && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Year Acquired</h3>
              <p className="text-lg">{property.yearAcquired}</p>
            </div>
          )}
        </div>

        {/* Description */}
        {property.description && (
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">About This Property</h2>
            <div dangerouslySetInnerHTML={{ __html: property.contentHtml || property.description }} />
          </div>
        )}

        {/* Gallery */}
        {property.gallery && property.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Property Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {property.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
