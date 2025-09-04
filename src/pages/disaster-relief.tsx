import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function DisasterRelief() {
  return (
    <Layout
      title='Joti Foundation | Disaster Relief'
      description="Joti Foundation's disaster relief program provides immediate aid and support to communities affected by natural or man-made disasters."
    >
      <Head>
        <title>Joti Foundation | Disaster Relief</title>
        <meta
          name='description'
          content="Joti Foundation's disaster relief program provides immediate aid and support to communities affected by natural or man-made disasters."
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
                src='/images/thumbnail/DISASTER-RELIFE.mp4'
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
                      <h2>Disaster Relief</h2>

                      <p>
                        In times of natural or man-made disasters, the
                        importance of swift and effective disaster relief cannot
                        be overstated. At the heart of these crises, countless
                        lives are disrupted, communities are shattered, and the
                        need for immediate assistance becomes paramount. Our
                        organization is dedicated to providing comprehensive
                        disaster relief services, focusing on delivering aid
                        with compassion, efficiency, and resilience.
                      </p>

                      <p>
                        From the initial stages of response to the crucial
                        phases of recovery and rebuilding, we stand committed to
                        alleviating the suffering of those affected by
                        disasters. Our teams work tirelessly to distribute
                        essential supplies, offer medical care, and provide
                        shelter to those who have lost their homes. Moreover, we
                        collaborate with local communities, government agencies,
                        and international partners to ensure a coordinated and
                        impactful response. Together, we strive to bring hope
                        and restore normalcy to the lives of those grappling
                        with the aftermath of unforeseen calamities.
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
                      <li className='current'>
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
    </Layout>
  )
}
