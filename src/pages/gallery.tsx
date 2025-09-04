import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Gallery() {
  // Gallery images data - all available images from gallery folder
  const galleryImages = [
    { src: '/images/gallery/g1.JPG', alt: 'Gallery Image 1' },
    { src: '/images/gallery/g2.JPG', alt: 'Gallery Image 2' },
    { src: '/images/gallery/g3.JPG', alt: 'Gallery Image 3' },
    { src: '/images/gallery/g4.JPG', alt: 'Gallery Image 4' },
    { src: '/images/gallery/g5.JPG', alt: 'Gallery Image 5' },
    { src: '/images/gallery/g6.JPG', alt: 'Gallery Image 6' },
    { src: '/images/gallery/g7.JPG', alt: 'Gallery Image 7' },
    { src: '/images/gallery/g8.JPG', alt: 'Gallery Image 8' },
    { src: '/images/gallery/g9.JPG', alt: 'Gallery Image 9' },
    { src: '/images/gallery/g10.JPG', alt: 'Gallery Image 10' },
    { src: '/images/gallery/g11.JPG', alt: 'Gallery Image 11' },
    { src: '/images/gallery/g12.JPG', alt: 'Gallery Image 12' },
    { src: '/images/gallery/g13.JPG', alt: 'Gallery Image 13' },
    { src: '/images/gallery/g14.JPG', alt: 'Gallery Image 14' },
    { src: '/images/gallery/g15.JPG', alt: 'Gallery Image 15' },
    { src: '/images/gallery/g16.JPG', alt: 'Gallery Image 16' },
    { src: '/images/gallery/g17.JPG', alt: 'Gallery Image 17' },
    { src: '/images/gallery/g18.JPG', alt: 'Gallery Image 18' },
    { src: '/images/gallery/g19.JPG', alt: 'Gallery Image 19' },
    { src: '/images/gallery/g20.JPG', alt: 'Gallery Image 20' },
    { src: '/images/gallery/g21.JPG', alt: 'Gallery Image 21' },
    { src: '/images/gallery/g22.JPG', alt: 'Gallery Image 22' },
    { src: '/images/gallery/g23.JPG', alt: 'Gallery Image 23' },
    { src: '/images/gallery/g24.jpg', alt: 'Gallery Image 24' },
    { src: '/images/gallery/g25.JPG', alt: 'Gallery Image 25' },
    { src: '/images/gallery/g26.JPG', alt: 'Gallery Image 26' },
    { src: '/images/gallery/g27.JPG', alt: 'Gallery Image 27' },
    { src: '/images/gallery/g28.JPG', alt: 'Gallery Image 28' },
    { src: '/images/gallery/g29.JPG', alt: 'Gallery Image 29' },
    { src: '/images/gallery/g30.JPG', alt: 'Gallery Image 30' },
    { src: '/images/gallery/g31.JPG', alt: 'Gallery Image 31' },
    { src: '/images/gallery/g32.JPG', alt: 'Gallery Image 32' },
    { src: '/images/gallery/g33.JPG', alt: 'Gallery Image 33' },
    { src: '/images/gallery/g34.JPG', alt: 'Gallery Image 34' },
    { src: '/images/gallery/g35.JPG', alt: 'Gallery Image 35' },
    { src: '/images/gallery/g36.JPG', alt: 'Gallery Image 36' },
    { src: '/images/gallery/g37.JPG', alt: 'Gallery Image 37' },
    { src: '/images/gallery/g38.JPG', alt: 'Gallery Image 38' },
    { src: '/images/gallery/g39.JPG', alt: 'Gallery Image 39' },
    { src: '/images/gallery/g40.JPG', alt: 'Gallery Image 40' },
    { src: '/images/gallery/g41.JPG', alt: 'Gallery Image 41' },
    { src: '/images/gallery/g42.JPG', alt: 'Gallery Image 42' },
    { src: '/images/gallery/c1.JPG', alt: 'Clothing Initiative 1' },
    { src: '/images/gallery/c2.JPG', alt: 'Clothing Initiative 2' },
    { src: '/images/gallery/c3.JPG', alt: 'Clothing Initiative 3' },
    { src: '/images/gallery/c4.JPG', alt: 'Clothing Initiative 4' },
    { src: '/images/gallery/c5.JPG', alt: 'Clothing Initiative 5' },
    { src: '/images/gallery/c6.JPG', alt: 'Clothing Initiative 6' },
    { src: '/images/gallery/c7.JPG', alt: 'Clothing Initiative 7' },
    { src: '/images/gallery/c8.JPG', alt: 'Clothing Initiative 8' },
    { src: '/images/gallery/c9.JPG', alt: 'Clothing Initiative 9' },
    { src: '/images/gallery/c10.JPG', alt: 'Clothing Initiative 10' },
    { src: '/images/gallery/d1.JPG', alt: 'Disaster Relief 1' },
    { src: '/images/gallery/d2.JPG', alt: 'Disaster Relief 2' },
    { src: '/images/gallery/d3.JPG', alt: 'Disaster Relief 3' },
    { src: '/images/gallery/h1.JPG', alt: 'Health Camp 1' },
    { src: '/images/gallery/h2.JPG', alt: 'Health Camp 2' },
    { src: '/images/gallery/v1.JPG', alt: 'Vision Initiative 1' },
    { src: '/images/gallery/v2.JPG', alt: 'Vision Initiative 2' },
  ]

  return (
    <Layout
      title='Joti Foundation | Gallery'
      description="Explore our gallery showcasing Joti Foundation's impactful work and initiatives across various communities."
    >
      <Head>
        <title>Joti Foundation | Gallery</title>
        <meta
          name='description'
          content="Explore our gallery showcasing Joti Foundation's impactful work and initiatives across various communities."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      {/* Page Banner Section */}
      <section className='page-banner relative bg-blue-600'>
        <div
          className='image-layer absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
          style={{ backgroundImage: "url('/images/bg7.jpg')" }}
        ></div>

        {/* <div className='bottom-rotten-curve absolute bottom-0 left-0 w-full'>
          <svg
            className='w-full h-16'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='fill-gray-100'
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='fill-gray-100'
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='fill-gray-100'
            ></path>
          </svg>
        </div> */}
        <div className='auto-container relative z-10 max-w-4xl mx-auto px-4 py-24 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-8 text-white'>
            Gallery
          </h1>
          <ul className='bread-crumb flex justify-center items-center space-x-3 text-lg'>
            <li>
              <Link
                href='/'
                className='text-red-500 hover:text-red-400 transition-colors font-medium'
              >
                Home
              </Link>
            </li>

            <li className='text-white font-semibold'>Gallery</li>
          </ul>
        </div>
      </section>
      {/* Gallery Section */}
      <section className='py-12 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4'>
          <br />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-md overflow-hidden'
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className='w-full h-64 object-cover'
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
