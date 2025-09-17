import Layout from '../components/Layout'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Flood Response Banner Component
function FloodResponseBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const floodImages = [
    '/images/flood/PTI09_04_2025_000356B.jpg',
    '/images/flood/punjab_floods_ht.jpg',
    '/images/flood/instagram_flood.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === floodImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [floodImages.length])

  return (
    <section className='flood-response-banner'>
      <div className='banner-container'>
        <div className='image-slider'>
          {floodImages.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </div>
        <div className='overlay'></div>
        <div className='banner-content'>
          <div className='container'>
            <div className='content-wrapper'>
              <h1 className='banner-title'>Punjab Flood Response 2025</h1>
              <a
                href='http://m-lp.co/floodvic-33'
                target='_blank'
                rel='noopener noreferrer'
                className='donate-btn'
              >
                DONATE NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flood-response-banner {
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }

        .banner-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }

        .slide.active {
          opacity: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 1;
        }

        .banner-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          z-index: 2;
          padding: 40px;
          padding-bottom: 20vh;
        }

        .content-wrapper {
          text-align: left;
          color: white;
          max-width: 600px;
          padding: 0;
        }

        .banner-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          animation: fadeInUp 1s ease-out;
        }

        .donate-btn {
          display: inline-block;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          padding: 18px 40px;
          font-size: 1.4rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .donate-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.6);
          background: linear-gradient(135deg, #f7931e, #ff6b35);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .flood-response-banner {
            height: 80vh;
            min-height: 500px;
          }

          .banner-content {
            padding: 20px;
            padding-bottom: 15vh;
          }

          .banner-title {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }

          .donate-btn {
            padding: 15px 30px;
            font-size: 1.2rem;
          }

          .content-wrapper {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .banner-content {
            padding: 15px;
            padding-bottom: 10vh;
          }

          .banner-title {
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
          }

          .donate-btn {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }

        /* Tablet Responsive */
        @media (min-width: 769px) and (max-width: 1024px) {
          .banner-content {
            padding: 30px;
            padding-bottom: 18vh;
          }

          .banner-title {
            font-size: 3rem;
          }

          .donate-btn {
            padding: 16px 35px;
            font-size: 1.3rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1200px) {
          .banner-content {
            padding: 50px;
            padding-bottom: 20vh;
          }

          .banner-title {
            font-size: 4rem;
          }

          .donate-btn {
            padding: 20px 45px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
export default function Home() {
  return (
    <Layout
      title='Joti Foundation | Home'
      description='Joti Foundation - Fighting for the abolition of poverty, gender inequality and a more sustainable future. Join us in making a difference.'
    >
      {/* Flood Response Banner */}
      <FloodResponseBanner />

      {/* Banner Section */}
      <section className='banner-section'>
        <div className='slide-item videi-slider'>
          <div className='image-layer123 lazy-image123'>
            <div className='overlay'></div>
            <video playsInline autoPlay muted loop>
              <source
                src='/images/thumbnail/Empower-documeantary-for-website.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>
      {/* Banner Section */}
      <section className='banner-section'>
        <div className='slide-item videi-slider'>
          <div className='image-layer123 lazy-image123'>
            <div className='overlay'></div>
            <video playsInline autoPlay muted loop>
              <source
                src='https://ik.imagekit.io/InFutiveTechnology/JotiFoundation/clear-vision-2.mp4?updatedAt=1710236971538'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='about-section style-three'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Left Column */}
            <div className='left-column123 col-lg-6 col-md-12 col-sm-12'>
              <div className='inner'>
                <div className='sec-title'>
                  <h2>
                    <span className='font-s'>Our Vision & Mission</span>
                  </h2>
                  <div className='text'>
                    We, at Joti Foundation are driven by empathy and a strong
                    sense of justice to fight for the abolition of poverty,
                    gender inequality and a more sustainable future. We strive
                    to build a future in which children do not go hungry but
                    thrive, women do not hide but shine, villages do not
                    struggle but grow and people with disabilities do not give
                    up on the idea of a secure, healthy and nourished future
                    where there is no discrimination. Team Joti Foundation vows
                    to work at grassroot level and connect with the people in a
                    better way. This would further our understanding of their
                    needs- emotionally, mentally, physically and
                    psychologically. We are here to reform the system, spark our
                    country&apos;s future and make a difference in the lives of
                    others!
                  </div>
                  <div className='donate-link'>
                    <Link href='/about' className='theme-btn btn-style-one'>
                      <span className='btn-title'>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className='right-column col-lg-6 col-md-12 col-sm-12'>
              <div className='inner'>
                <img
                  src='/images/about1d.png'
                  width='100%'
                  alt='About Joti Foundation'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section Two */}
      <section className='causes-section-two'>
        <div className='auto-container'>
          <div className='sec-title centered'>
            <h2>
              Popular <span className='font-s'>Causes</span>
            </h2>
          </div>
          <div className='row clearfix'>
            {/* Cause Block */}
            <div className='cause-block-two col-lg-4 col-md-6 col-sm-12'>
              <div
                className='inner-box home-causes wow fadeInUp'
                data-wow-delay='0ms'
              >
                <div className='image-box'>
                  <figure className='image'>
                    <Link href='/jal-jeevan'>
                      <img
                        className='lazy-image'
                        src='/images/thumbnail/jal-jeevan-thumbnail.jpg'
                        alt='Jal Jeevan'
                      />
                    </Link>
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/jal-jeevan'>Jal Jeevan</Link>
                  </h3>
                  <div className='text'>
                    Malwa region of Punjab is popularly known as the cancer belt
                    of India. One of the major causes for the different types of
                    cancer...
                  </div>
                </div>
              </div>
            </div>

            <div className='cause-block-two col-lg-4 col-md-6 col-sm-12'>
              <div
                className='inner-box home-causes wow fadeInUp'
                data-wow-delay='0ms'
              >
                <div className='image-box'>
                  <figure className='image'>
                    <Link href='/clearer-vision'>
                      <img
                        className='lazy-image'
                        src='/images/thumbnail/clear-visionthumbnailr.JPG'
                        alt='Clear Vision for Brighter Future'
                      />
                    </Link>
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/clearer-vision'>
                      Clear Vision for Brighter Future
                    </Link>
                  </h3>
                  <div className='text'>
                    We realize the impact low vision has on the learning
                    capacity of a child. Therefore, in an initiative to provide
                    eye care to children...
                  </div>
                </div>
              </div>
            </div>

            {/* Cause Block */}
            <div className='cause-block-two col-lg-4 col-md-6 col-sm-12'>
              <div
                className='inner-box home-causes wow fadeInUp'
                data-wow-delay='0ms'
              >
                <div className='image-box'>
                  <figure className='image'>
                    <Link href='/disaster-relief'>
                      <img
                        className='lazy-image'
                        src='/images/thumbnail/disaster-relief-thumbnail.JPG'
                        alt='Disaster Relief'
                      />
                    </Link>
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/disaster-relief'>Disaster Relief</Link>
                  </h3>
                  <div className='text'>
                    In times of natural or man-made disasters, the importance of
                    swift and effective disaster relief cannot be overstated...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <center>
            <div className='donate-link'>
              <Link href='/our-causes' className='theme-btn btn-style-one'>
                <span className='btn-title'>Read More</span>
              </Link>
            </div>
          </center>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className='causes asd'>
        <div
          className='container-fluid'
          style={{ margin: 'auto', padding: '0px' }}
        >
          <div className='row clearfix'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <img src='/images/bg1.jpg' width='100%' alt='Background' />
            </div>
          </div>
        </div>
      </section>

      <section className='call-to-action'>
        {/* Image Layer */}
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/event-image-2.JPG')" }}
        ></div>
        <div className='auto-container'>
          <div className='inner'>
            <div className='sec-title centered'>
              <h2>How you can help?</h2>
              <div className='text'>
                Your donation will help us save and improve lives with research,
                education and emergency care.
              </div>
              <div className='link-box clearfix'>
                <Link href='/partner' className='theme-btn btn-style-three'>
                  <span className='btn-title'>Partner</span>
                </Link>
                <Link href='/volunteer' className='theme-btn btn-style-three'>
                  <span className='btn-title'>Volunteer</span>
                </Link>
                <a
                  href='https://pages.razorpay.com/pl_Nw26gwxdMsIh53/view'
                  className='theme-btn btn-style-three'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='btn-title'>Donate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Page Section */}
      <section className='gallery-page-section'>
        <div className='auto-container'>
          <div className='sec-title centered'>
            <h2>
              Gallery <span className='font-s'></span>
            </h2>
          </div>
          {/* MixitUp Gallery */}
          <div className='mixitup-gallery'>
            <div className='filter-list row'>
              {/* Gallery Items */}
              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g1.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g2.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g3.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g14.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g15.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g17.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g40.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g32.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g30.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g37.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g24.jpg'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>

              <div className='gallery-item-two mix all disaster col-lg-4 col-md-6 col-sm-12'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      className='lazy-image'
                      src='/images/gallery/g22.JPG'
                      alt='Gallery Image'
                    />
                  </figure>
                </div>
              </div>
            </div>

            <center>
              <div className='donate-link'>
                <Link href='/gallery' className='theme-btn btn-style-one'>
                  <span className='btn-title'>Gallery More</span>
                </Link>
              </div>
            </center>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className='add'>
        <div className='container'>
          <div className='row clearfix'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='sec-title centered'>
                <center>
                  <h2>
                    What&apos;s <span className='font-s'>New</span>
                  </h2>
                </center>
              </div>
            </div>
          </div>

          <div className='row clearfix px-3 md:px-0'>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4 md:mb-0'>
              <div className='video-container mb-4'>
                <iframe
                  src='https://www.youtube.com/embed/AqN-GjtQsXc?si=KZtHcQICCPEg7azH'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '200px',
                    minHeight: '200px',
                  }}
                  className='rounded-lg'
                ></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  src='https://www.youtube.com/embed/4euQLGlAWgo?si=tmsSoycszPbgIugM'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '200px',
                    minHeight: '200px',
                  }}
                  className='rounded-lg'
                ></iframe>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='instagram-container'>
                <blockquote
                  className='instagram-media'
                  data-instgrm-permalink='https://www.instagram.com/jotifoundation/'
                  data-instgrm-version='12'
                  style={{
                    background: '#fff',
                    border: 0,
                    borderRadius: '8px',
                    boxShadow:
                      '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
                    margin: '1px',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      id='main_link'
                      href='https://www.instagram.com/jotifoundation/'
                      style={{
                        background: '#ffffff',
                        lineHeight: 0,
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                      }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: '#f4f4f4',
                            borderRadius: '50%',
                            flexGrow: 0,
                            height: '40px',
                            marginRight: '14px',
                            width: '40px',
                          }}
                        ></div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              borderRadius: '4px',
                              flexGrow: 0,
                              height: '14px',
                              marginBottom: '6px',
                              width: '100px',
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              borderRadius: '4px',
                              flexGrow: 0,
                              height: '14px',
                              width: '60px',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div style={{ padding: '19% 0' }}></div>
                      <div
                        style={{
                          display: 'block',
                          height: '50px',
                          margin: '0 auto 12px',
                          width: '50px',
                        }}
                      >
                        <svg
                          width='50px'
                          height='50px'
                          viewBox='0 0 60 60'
                          version='1.1'
                          xmlns='https://www.w3.org/2000/svg'
                          xmlnsXlink='https://www.w3.org/1999/xlink'
                        >
                          <g
                            stroke='none'
                            strokeWidth='1'
                            fill='none'
                            fillRule='evenodd'
                          >
                            <g
                              transform='translate(-511.000000, -20.000000)'
                              fill='#000000'
                            >
                              <g>
                                <path d='M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631'></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: '8px' }}>
                        <div
                          style={{
                            color: '#3897f0',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 550,
                            lineHeight: '18px',
                          }}
                        >
                          View this post on Instagram
                        </div>
                      </div>
                      <div style={{ padding: '12.5% 0' }}></div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginBottom: '14px',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              borderRadius: '50%',
                              height: '12.5px',
                              width: '12.5px',
                              transform: 'translateX(0px) translateY(7px)',
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              height: '12.5px',
                              transform:
                                'rotate(-45deg) translateX(3px) translateY(1px)',
                              width: '12.5px',
                              flexGrow: 0,
                              marginRight: '14px',
                              marginLeft: '2px',
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              borderRadius: '50%',
                              height: '12.5px',
                              width: '12.5px',
                              transform: 'translateX(9px) translateY(-18px)',
                            }}
                          ></div>
                        </div>
                        <div style={{ marginLeft: '8px' }}>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              borderRadius: '50%',
                              flexGrow: 0,
                              height: '20px',
                              width: '20px',
                            }}
                          ></div>
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: '2px solid transparent',
                              borderLeft: '6px solid #f4f4f4',
                              borderBottom: '2px solid transparent',
                              transform:
                                'translateX(16px) translateY(-4px) rotate(30deg)',
                            }}
                          ></div>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                          <div
                            style={{
                              width: '0px',
                              borderTop: '8px solid #f4f4f4',
                              borderRight: '8px solid transparent',
                              transform: 'translateY(16px)',
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: '#f4f4f4',
                              flexGrow: 0,
                              height: '12px',
                              width: '16px',
                              transform: 'translateY(-4px)',
                            }}
                          ></div>
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: '8px solid #f4f4f4',
                              borderLeft: '8px solid transparent',
                              transform: 'translateY(-4px) translateX(8px)',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                          justifyContent: 'center',
                          marginBottom: '24px',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: '#f4f4f4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            marginBottom: '6px',
                            width: '224px',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#f4f4f4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            width: '144px',
                          }}
                        ></div>
                      </div>
                    </a>
                    <p
                      style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: '17px',
                        marginBottom: 0,
                        marginTop: '8px',
                        overflow: 'hidden',
                        padding: '8px 0 7px',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <a
                        href='https://www.instagram.com/jotifoundation/'
                        style={{
                          color: '#c9c8cd',
                          fontFamily: 'Arial, sans-serif',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          lineHeight: '17px',
                          textDecoration: 'none',
                        }}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Shared post
                      </a>
                      on{' '}
                      <time
                        style={{
                          fontFamily: 'Arial, sans-serif',
                          fontSize: '14px',
                          lineHeight: '17px',
                        }}
                      >
                        Time
                      </time>
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
            <style jsx>{`
              .boxes3 {
                height: 175px;
                width: 153px;
              }
              #n img {
                max-height: none !important;
                max-width: none !important;
                background: none !important;
              }
              #inst i {
                max-height: none !important;
                max-width: none !important;
                background: none !important;
              }

              /* Responsive video containers */
              .video-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%; /* 16:9 aspect ratio */
                overflow: hidden;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }

              .video-container iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100% !important;
                height: 100% !important;
                border: none;
                border-radius: 8px;
              }

              /* Mobile responsiveness */
              @media (max-width: 768px) {
                .video-container {
                  margin-bottom: 16px;
                }

                .instagram-container {
                  margin-top: 16px;
                  padding: 0 8px;
                }

                .instagram-media {
                  min-width: 280px !important;
                  max-width: 100% !important;
                }
              }

              /* Tablet responsiveness */
              @media (min-width: 769px) and (max-width: 1024px) {
                .video-container {
                  padding-bottom: 50%;
                }
              }

              /* Desktop responsiveness */
              @media (min-width: 1025px) {
                .video-container {
                  padding-bottom: 56.25%;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className='sponsors-section'>
        <div className='sec-title centered'>
          <h2>
            Our <span className='font-s'>Partners</span>
          </h2>
        </div>
        <div className='auto-container'>
          {/* Sponsors Carousel */}
          <div
            className='love-carousel owl-theme owl-carousel'
            data-options='{"loop": true, "margin": 40, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "4" } , "800":{ "items" : "3" }, "1024":{ "items" : "6" }}}'
          >
            <div className='slide-item'>
              <figure className='image-box'>
                <a href='#'>
                  <img src='/images/clients/3.jpeg' alt='Partner' />
                </a>
              </figure>
            </div>
            <div className='slide-item'>
              <figure className='image-box'>
                <a href='#'>
                  <img src='/images/clients/4.png' alt='Partner' />
                </a>
              </figure>
            </div>
            <div className='slide-item'>
              <figure className='image-box'>
                <a href='#'>
                  <img src='/images/clients/5.png' alt='Partner' />
                </a>
              </figure>
            </div>
            <div className='slide-item'>
              <figure className='image-box'>
                <a href='#'>
                  <img src='/images/clients/6.png' alt='Partner' />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
