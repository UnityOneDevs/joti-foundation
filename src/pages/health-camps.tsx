import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function HealthCamps() {
  return (
    <Layout
      title='Joti Foundation | Health Camps'
      description="Health Camps - Joti Foundation's initiative to provide comprehensive healthcare services to rural communities in Punjab."
    >
      <Head>
        <title>Joti Foundation | Health Camps</title>
        <meta
          name='description'
          content="Health Camps - Joti Foundation's initiative to provide comprehensive healthcare services to rural communities in Punjab."
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
                src='/images/thumbnail/Health-Camp-full-documeantary.mp4'
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
                      <h2>Health Camps</h2>

                      <p>
                        Our commitment to community well-being extends beyond
                        providing immediate aid—we strive to create sustainable
                        health solutions that uplift entire communities. One of
                        the cornerstones of our outreach efforts is our regular
                        organization of health camps in the villages of Punjab.
                        These camps serve as vital platforms for addressing
                        healthcare disparities, promoting preventive care, and
                        empowering individuals to take control of their health.
                      </p>

                      <p>
                        Our village health camps are carefully designed to be
                        accessible, inclusive, and comprehensive. We collaborate
                        with local healthcare professionals, volunteers, and
                        community leaders to ensure that each camp meets the
                        unique needs of the population it serves. From remote
                        hamlets to bustling rural centers, we reach out to
                        communities that often lack access to regular healthcare
                        services.
                      </p>

                      <p>
                        The scope of our health camps encompasses a wide range
                        of medical services, including general check-ups,
                        immunizations, screenings for common ailments, and
                        health education sessions. We prioritize preventive care
                        and early intervention, recognizing that proactive
                        measures can significantly reduce the burden of disease
                        and improve overall well-being.
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
                      <li>
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
                      <li className='current'>
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
    </Layout>
  )
}
