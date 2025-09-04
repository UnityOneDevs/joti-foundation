import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Sitemap() {
  return (
    <Layout
      title='Joti Foundation | Sitemap'
      description='Joti Foundation Sitemap - Find all pages and sections of our website.'
    >
      <Head>
        <title>Joti Foundation | Sitemap</title>
        <meta
          name='description'
          content='Joti Foundation Sitemap - Find all pages and sections of our website.'
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg2.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve'></div>
        <div className='auto-container'>
          <h1>Sitemap</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Sitemap</li>
          </ul>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className='contact-info-section'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <h2>Website Sitemap</h2>
              <p>Find all pages and sections of the Joti Foundation website:</p>

              <div style={{ marginTop: '30px' }}>
                <h3>Main Pages</h3>
                <ul>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact Us</Link>
                  </li>
                  <li>
                    <Link href='/gallery'>Gallery</Link>
                  </li>
                  <li>
                    <Link href='/volunteer'>Volunteer</Link>
                  </li>
                  <li>
                    <Link href='/donate'>Donate</Link>
                  </li>
                  <li>
                    <Link href='/partner'>Partner</Link>
                  </li>
                  <li>
                    <Link href='/news-media'>News & Media</Link>
                  </li>
                  <li>
                    <Link href='/annual-reports'>Annual Reports</Link>
                  </li>
                </ul>

                <h3>Our Causes</h3>
                <ul>
                  <li>
                    <Link href='/our-causes'>Our Causes</Link>
                  </li>
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
                    <Link href='/distribution-drive'>Distribution Drive</Link>
                  </li>
                  <li>
                    <Link href='/empower-ed'>Empower-ED</Link>
                  </li>
                  <li>
                    <Link href='/health-camps'>Health Camps</Link>
                  </li>
                </ul>

                <h3>Education</h3>
                <ul>
                  <li>
                    <Link href='/education'>Education</Link>
                  </li>
                </ul>

                <h3>Legal & Policy</h3>
                <ul>
                  <li>
                    <Link href='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href='/terms-and-conditions'>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href='/refund-policy'>Refund Policy</Link>
                  </li>
                </ul>

                <h3>Other Pages</h3>
                <ul>
                  <li>
                    <Link href='/donate-details'>Donate Details</Link>
                  </li>
                  <li>
                    <Link href='/thankyou'>Thank You</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
