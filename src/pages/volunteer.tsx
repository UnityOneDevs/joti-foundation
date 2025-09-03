import Head from 'next/head'
import Link from 'next/link'

export default function Volunteer() {
  return (
    <>
      <Head>
        <title>Joti Foundation | Volunteer</title>
        <meta
          name='description'
          content='Join Joti Foundation as a volunteer and make a difference in communities. Apply now to be part of our mission.'
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
          <h1>Volunteer</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Volunteer</li>
          </ul>
        </div>
      </section>

      {/* Checkout Page */}
      <section className='checkout-page'>
        <div className='auto-container'>
          <div className='checkout-form'>
            <form method='post' action='/api/volunteer'>
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

                      {/* Form Group - Contact Number */}
                      <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                        <div className='field-label'>Contact Number</div>
                        <input
                          type='tel'
                          name='phone'
                          value=''
                          placeholder='Enter Contact Number'
                          required
                        />
                      </div>

                      {/* Form Group - Educational Qualification */}
                      <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                        <div className='field-label'>
                          Educational Qualification
                        </div>
                        <input
                          type='text'
                          name='qualification'
                          value=''
                          placeholder='Enter Educational Qualification'
                          required
                        />
                      </div>

                      {/* Form Group - Address */}
                      <div className='form-group col-lg-12 col-md-6 col-sm-12'>
                        <div className='field-label'>Address</div>
                        <input
                          type='text'
                          name='address'
                          value=''
                          placeholder='Enter Address'
                          required
                        />
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
    </>
  )
}
