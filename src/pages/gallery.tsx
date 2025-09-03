import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  // Gallery images data
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
  ]

  return (
    <>
      <Head>
        <title>Joti Foundation | Gallery</title>
        <meta
          name='description'
          content="Explore our gallery showcasing Joti Foundation's impactful work and initiatives across various communities."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg7.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve'></div>
        <div className='auto-container'>
          <h1>Gallery</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Gallery</li>
          </ul>
        </div>
      </section>

      {/* Gallery Page Section */}
      <section className='gallery-page-section'>
        <div className='auto-container'>
          {/* MixitUp Gallery */}
          <div className='mixitup-gallery'>
            {/* Filter */}
            <div className='filters clearfix'>
              <ul className='filter-tabs filter-btns clearfix'>
                <li
                  className='active filter'
                  data-role='button'
                  data-filter='all'
                >
                  All
                </li>
                <li
                  className='filter'
                  data-role='button'
                  data-filter='.children'
                >
                  Clothes
                </li>
                <li className='filter' data-role='button' data-filter='.vision'>
                  Vision
                </li>
                <li className='filter' data-role='button' data-filter='.health'>
                  Health
                </li>
                <li
                  className='filter'
                  data-role='button'
                  data-filter='.disaster'
                >
                  Disaster Relief
                </li>
              </ul>
            </div>

            <div className='filter-list row'>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'
                >
                  <div className='image-box'>
                    <figure className='image'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className='lazy-image'
                        style={{ objectFit: 'cover' }}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
