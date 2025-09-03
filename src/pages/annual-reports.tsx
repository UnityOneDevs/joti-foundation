import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function AnnualReports() {
  return (
    <>
      <Head>
        <title>Joti Foundation | Annual Reports</title>
        <meta
          name='description'
          content="Access Joti Foundation's annual reports to learn about our impact, achievements, and financial transparency."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg8.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve alternate'></div>
        <div className='auto-container'>
          <h1>Annual Reports</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Annual Reports</li>
          </ul>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className='mission-vision'>
        <div className='circle-one'></div>
        <div className='circle-two'></div>

        <div className='auto-container'>
          <div className='mission'>
            <div className='row clearfix'>
              <div
                className='image-column col-lg-12 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <a
                    href='/images/annual-report-2023 - 2024.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='/images/add1.jfif'
                      alt='Annual Report 2023-2024'
                      width={800}
                      height={600}
                      className='lazy-image loaded'
                      style={{ objectFit: 'cover' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
