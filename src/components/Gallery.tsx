export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      alt: 'Community outreach program',
      title: 'Community Outreach',
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      alt: 'Children receiving education support',
      title: 'Education Support',
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      alt: 'Healthcare camp in rural area',
      title: 'Healthcare Camp',
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      alt: 'Volunteers helping communities',
      title: 'Volunteer Work',
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      alt: 'Disaster relief efforts',
      title: 'Disaster Relief',
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Women empowerment program',
      title: 'Women Empowerment',
    },
  ]

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Gallery
          </h2>
          <div className='w-24 h-1 bg-blue-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Take a look at our work and the impact we&apos;re making in
            communities across India
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='aspect-w-4 aspect-h-3 bg-gray-200 rounded-2xl overflow-hidden'>
                <div className='w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl mb-2'>📸</div>
                    <p className='text-gray-500 text-sm'>{image.title}</p>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center'>
                <div className='text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h3 className='text-xl font-bold mb-2'>{image.title}</h3>
                  <button className='bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg'>
            View More Photos
          </button>
        </div>
      </div>
    </section>
  )
}
