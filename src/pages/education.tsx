import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Education() {
  return (
    <Layout
      title='Joti Foundation | Education'
      description="Education initiatives by Joti Foundation - Clear Vision for Brighter Future and EmpowerED programs to support children's education and development."
    >
      <Head>
        <title>Joti Foundation | Education</title>
        <meta
          name='description'
          content="Education initiatives by Joti Foundation - Clear Vision for Brighter Future and EmpowerED programs to support children's education and development."
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
                src='/images/slider/clear-vision-4.mp4'
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
                      <h2>Education</h2>

                      <p>
                        <b>CLEAR VISION FOR BRIGHTER FUTURE</b> - We realize the
                        impact low vision has on the learning capacity of a
                        child. Therefore, in an initiative to provide eye care
                        to children and to give them a brighter future we are
                        screening all the government school children of Punjab
                        making Punjab the first state in India where all
                        children are fully screened. The aim is to successfully
                        finish this project by the end of 2025.
                      </p>

                      <p>
                        <b>EmpowerED</b> - In a world of boundless
                        possibilities, where dreams are nurtured and potential
                        is realized, the power of education stands as an
                        unwavering beacon of hope. It is within the pages of
                        knowledge that we find the keys to unlocking brighter
                        futures, overcoming adversity, and embracing a life of
                        endless opportunity.
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
                        <Link href='/disaster-relief'>Disaster Relief</Link>
                      </li>
                      <li className='current'>
                        <Link href='/education'>Education</Link>
                      </li>
                      <li>
                        <Link href='/samarth'>Samarth</Link>
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
