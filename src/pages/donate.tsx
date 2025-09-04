import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Donate() {
  return (
    <Layout
      title='Joti Foundation | Donate'
      description="Support Joti Foundation's mission by making a donation. Every contribution helps us make a difference in communities."
    >
      <Head>
        <title>Joti Foundation | Donate</title>
        <meta
          name='description'
          content="Support Joti Foundation's mission by making a donation. Every contribution helps us make a difference in communities."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/add3.png')" }}
        ></div>
        <div className='bottom-rotten-curve'></div>
        <div className='auto-container'>
          <h1>Donation</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Donation</li>
          </ul>
        </div>
      </section>

      {/* Donate Section */}
      <section className='donate-section'>
        <div className='auto-container'>
          <div className='tabs-box'>
            <div className='row clearfix'>
              {/* Title Column */}
              <div className='title-column col-lg-6 col-md-12 col-sm-12'>
                <div className='inner'>
                  <h2>Please Make Your Donation</h2>
                  <figure className='image-box'>
                    <Image
                      src='/images/resource/donate-image-1.jpg'
                      alt='Donation'
                      width={500}
                      height={400}
                      className='lazy-image'
                      style={{ objectFit: 'cover' }}
                    />
                  </figure>
                </div>
              </div>

              {/* Form Column */}
              <div className='form-column col-lg-6 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='donate-form'>
                    <form method='post' action='#'>
                      <h3>Your Donation</h3>

                      <div className='form-group'>
                        <div className='field-label'>
                          How much would you like to donate?
                        </div>
                        <div className='select-amount clearfix'>
                          <div className='select-box'>
                            <input
                              type='radio'
                              name='payment-group'
                              id='radio-one'
                            />
                            <label htmlFor='radio-one'>₹10</label>
                          </div>
                          <div className='select-box'>
                            <input
                              type='radio'
                              name='payment-group'
                              id='radio-two'
                            />
                            <label htmlFor='radio-two'>₹20</label>
                          </div>
                          <div className='select-box'>
                            <input
                              type='radio'
                              name='payment-group'
                              id='radio-three'
                              defaultChecked
                            />
                            <label htmlFor='radio-three'>₹50</label>
                          </div>
                          <div className='select-box'>
                            <input
                              type='radio'
                              name='payment-group'
                              id='radio-four'
                            />
                            <label htmlFor='radio-four'>₹100</label>
                          </div>
                        </div>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='other-payment'
                            value=''
                            placeholder='or Give a Custom Amount'
                          />
                        </div>
                      </div>

                      <div className='form-group'>
                        <Link
                          href='/donate-details'
                          className='theme-btn btn-style-one'
                        >
                          <span className='btn-title' style={{ color: '#fff' }}>
                            Donate Now
                          </span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
