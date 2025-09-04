import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Partner() {
  return (
    <Layout
      title='Joti Foundation | Partner'
      description='Partner with Joti Foundation to make a difference in communities. Join us in our mission to create positive change.'
    >
      <Head>
        <title>Joti Foundation | Partner</title>
        <meta
          name='description'
          content='Partner with Joti Foundation to make a difference in communities. Join us in our mission to create positive change.'
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
          <h1>Partner</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Partner</li>
          </ul>
        </div>
      </section>

      {/* Checkout Page */}
      <section className='checkout-page'>
        <div className='auto-container'>
          {/* Checkout Details */}
          <div className='checkout-form'>
            <form method='post' action='/api/partner'>
              <div className='billing-detail'>
                <div className='row clearfix'>
                  <div className='col-lg-3 col-md-6 col-sm-6'></div>
                  <div className='billing-column col-lg-6 col-md-12 col-sm-12'>
                    <div className='row clearfix'>
                      {/* Form Group - Name */}
                      <div className='form-group col-lg-12 col-md-6 col-sm-12'>
                        <div className='field-label'>Name</div>
                        <input
                          type='text'
                          name='name'
                          value=''
                          placeholder='Enter First Name'
                          required
                        />
                      </div>

                      {/* Form Group - Designation */}
                      <div className='form-group col-lg-12 col-md-6 col-sm-12'>
                        <div className='field-label'>Designation</div>
                        <input
                          type='text'
                          name='designation'
                          value=''
                          placeholder='Enter Designation'
                        />
                      </div>

                      {/* Form Group - Company */}
                      <div className='form-group col-lg-12 col-md-6 col-sm-12'>
                        <div className='field-label'>Company</div>
                        <input
                          type='text'
                          name='company'
                          value=''
                          placeholder='Enter Company Name'
                        />
                      </div>

                      {/* Form Group - Email */}
                      <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                        <div className='field-label'>Email</div>
                        <input
                          type='email'
                          name='email'
                          value=''
                          placeholder='Enter Email Address'
                          required
                        />
                      </div>

                      {/* Form Group - Mobile Number */}
                      <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                        <div className='field-label'>Mobile Number</div>
                        <input
                          type='tel'
                          name='phone'
                          value=''
                          placeholder='Enter Mobile Number'
                          required
                        />
                      </div>

                      {/* Form Group - Message */}
                      <div className='billing-column col-lg-12 col-md-12 col-sm-12'>
                        <div className='Additional-info'>
                          <div className='form-group'>
                            <div className='field-label'>
                              Explain partnership idea in 100 words
                            </div>
                            <textarea
                              name='message'
                              placeholder='Notes about your order, e.g. special notes for your delivery.'
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className='billing-column col-lg-12 col-md-12 col-sm-12'>
                        <div className='btn-box'>
                          <button
                            type='submit'
                            className='theme-btn btn-style-one place-order'
                          >
                            <span className='btn-title'>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
