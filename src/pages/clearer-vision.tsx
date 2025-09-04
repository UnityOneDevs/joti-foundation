import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function ClearerVision() {
  return (
    <Layout
      title='Joti Foundation | Clearer Vision for Brighter Future'
      description="Clearer Vision for Brighter Future - Joti Foundation's initiative to provide free eye care and spectacles to underprivileged children in Punjab."
    >
      <Head>
        <title>Joti Foundation | Clearer Vision for Brighter Future</title>
        <meta
          name='description'
          content="Clearer Vision for Brighter Future - Joti Foundation's initiative to provide free eye care and spectacles to underprivileged children in Punjab."
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
                src='/images/thumbnail/clear-vision.mp4'
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
                      <h2>Clearer Vision for Brighter Future</h2>

                      <p>
                        At Joti Foundation, we firmly believe that every child
                        deserves the opportunity to reach their full potential,
                        regardless of their circumstances. Unfortunately, for
                        many underprivileged children in Punjab, low vision acts
                        as a barrier to learning and growth. Recognizing the
                        critical importance of clear vision in educational
                        attainment, we have launched an initiative dedicated to
                        providing comprehensive eye care to these children,
                        ensuring they have the tools they need to succeed.
                      </p>

                      <p>
                        Our initiative focuses on two key objectives: screening
                        underprivileged children for vision problems and
                        providing them with free-of-cost spectacles. We
                        understand that early detection and intervention are
                        crucial in addressing vision issues, which is why we are
                        committed to reaching children at a young age and
                        providing them with the necessary support.
                      </p>

                      <p>
                        Through our screening program, we aim to identify
                        children who may be struggling with vision impairments
                        but lack access to proper eye care. Our team of
                        dedicated healthcare professionals, volunteers, in
                        collaboration with the district administration conducts
                        thorough screenings in schools and communities across
                        Punjab, ensuring that no child is left behind.
                      </p>

                      <p>
                        For those identified with vision problems, we provide
                        high-quality, prescription eyeglasses at no cost. These
                        spectacles are not only essential for improving vision
                        but also for boosting confidence and self-esteem. By
                        removing the financial barrier to accessing eyewear, we
                        empower children to fully engage in their education and
                        pursue their dreams without limitations.
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
                      <li className='current'>
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
