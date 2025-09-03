import Head from 'next/head'
import Link from 'next/link'

export default function Samarth() {
  return (
    <>
      <Head>
        <title>Joti Foundation | Samarth</title>
        <meta
          name='description'
          content="Samarth - Joti Foundation's initiative to empower differently abled individuals through education and support programs."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner123'>
        <div className='slide-item videi-slider'>
          <div className='image-layer123 lazy-image123'>
            <div className='overlay'></div>
            <video playsInline autoPlay muted loop>
              <source
                src='/images/thumbnail/Samarath-web.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>

      {/* Sidebar Page Container */}
      <div className='sidebar-page-container'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Content Side */}
            <div className='content-side col-lg-8 col-md-12 col-sm-12'>
              {/* Cause Details */}
              <div className='cause-details'>
                <div className='inner-box'>
                  <div className='lower-content'>
                    <div className='text-content'>
                      <h2>Samarth</h2>
                      <p>
                        In a world of boundless possibilities, where dreams are
                        nurtured and potential is realized, the power of
                        education stands as an unwavering beacon of hope. It is
                        within the pages of knowledge that we find the keys to
                        unlocking brighter futures, overcoming adversity, and
                        embracing a life of endless opportunity.
                      </p>

                      <p>
                        At Joti Foundation we have long believed in the
                        transformative power of education. We recognize that
                        every child, irrespective of their background or
                        circumstances, deserves access to quality education. It
                        is this belief that has inspired us to embark on a
                        journey dedicated to making a difference in the lives of
                        young minds.
                      </p>

                      <p>
                        Joti Foundation under the aegis of its project titled
                        'EmpowerED' is committed to providing the best solutions
                        and aid to every child in the realm of education which
                        will act as a bridge between their dreams and reality.
                      </p>
                    </div>
                    <div className='link-box'>
                      <Link href='/donate' className='theme-btn btn-style-one'>
                        <span className='btn-title'>Donate Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Side */}
            <div className='sidebar-side col-lg-4 col-md-12 col-sm-12'>
              <aside className='sidebar'>
                {/* Our Causes */}
                <div className='sidebar-widget categories'>
                  <h3 className='sidebar-title'>Our Causes</h3>

                  <div className='widget-content'>
                    <ul>
                      <li>
                        <Link href='/jal-jeevan'>Jal Jeevan</Link>
                      </li>
                      <li>
                        <Link href='/clearer-vision'>
                          Clearer Vision for Brighter Future
                        </Link>
                      </li>
                      <li>
                        <Link href='/disaster-relief'>Disaster Relief</Link>
                      </li>
                      <li className='current'>
                        <Link href='/samarth'>Samarth</Link>
                      </li>
                      <li>
                        <Link href='/distribution-drive'>
                          Distribution Drive
                        </Link>
                      </li>
                      <li>
                        <Link href='/empower-ed'>Empower-ED</Link>
                      </li>
                      <li>
                        <Link href='/health-camps'>Health Camps</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
