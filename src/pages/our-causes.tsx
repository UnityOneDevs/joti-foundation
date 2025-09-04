import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function OurCauses() {
  // Causes data
  const causes = [
    {
      title: 'Jal Jeevan',
      description:
        "In the heart of Punjab's Malwa region lies a silent threat: the looming specter of waterborne diseases and cancer caused...",
      image: '/images/thumbnail/jal-jeevan-thumbnail.jpg',
      link: '/jal-jeevan',
      delay: '0ms',
    },
    {
      title: 'Clear Vision for Brighter Future',
      description:
        'At Joti Foundation, we firmly believe that every child deserves the opportunity to reach their full potential, regardless of their...',
      image: '/images/thumbnail/clear-visionthumbnailr.JPG',
      link: '/clearer-vision',
      delay: '600ms',
    },
    {
      title: 'Disaster Relief',
      description:
        'In times of natural or man-made disasters, the importance of swift and effective disaster relief cannot be overstated...',
      image: '/images/thumbnail/disaster-relief-thumbnail.JPG',
      link: '/disaster-relief',
      delay: '300ms',
    },
    {
      title: 'Samarth',
      description:
        'In a world of boundless possibilities, where dreams are nurtured and potential is realized, the power of education stands...',
      image: '/images/thumbnail/samarth-thumbnail.jpg',
      link: '/samarth',
      delay: '600ms',
    },
    {
      title: 'Distribution Drive',
      description:
        'At Joti Foundation, we believe in the power of small gestures to make a big difference. Our initiative, "Redistributing Happiness...',
      image: '/images/thumbnail/distribution-drive-thumbnail.JPG',
      link: '/distribution-drive',
      delay: '600ms',
    },
    {
      title: 'Empower-ED',
      description:
        'In a world of boundless possibilities, where dreams are nurtured and potential is realized, the power of education stands...',
      image: '/images/thumbnail/empower-ed-thumbnail.jpg',
      link: '/empower-ed',
      delay: '600ms',
    },
    {
      title: 'Health Camps',
      description:
        'Our commitment to community well-being extends beyond providing immediate aid—we strive to create sustainable health...',
      image: '/images/thumbnail/health-camp-thumbnail.JPG',
      link: '/health-camps',
      delay: '600ms',
    },
  ]

  return (
    <Layout
      title='Joti Foundation | Our Causes'
      description="Explore Joti Foundation's various causes and initiatives aimed at making a positive impact in communities."
    >
      <Head>
        <title>Joti Foundation | Our Causes</title>
        <meta
          name='description'
          content="Explore Joti Foundation's various causes and initiatives aimed at making a positive impact in communities."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg9.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve'></div>
        <div className='auto-container'>
          <h1>Our Causes</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Our Causes</li>
          </ul>
        </div>
      </section>

      {/* Causes Section */}
      <section className='causes-section-three'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {causes.map((cause, index) => (
              <div
                key={index}
                className='cause-block-two col-lg-4 col-md-6 col-sm-12'
              >
                <div
                  className='inner-box wow fadeInUp'
                  data-wow-delay={cause.delay}
                >
                  <div className='image-box'>
                    <figure className='image'>
                      <Link href={cause.link}>
                        <Image
                          src={cause.image}
                          alt={cause.title}
                          width={400}
                          height={300}
                          className='lazy-image'
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className='lower-content'>
                    <h3>
                      <Link href={cause.link}>{cause.title}</Link>
                    </h3>
                    <div className='text'>{cause.description}</div>
                  </div>
                  <div className='donate-info'>
                    <div className='link-box'>
                      <Link
                        href={cause.link}
                        className='theme-btn btn-style-two'
                      >
                        <span className='btn-title'>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
