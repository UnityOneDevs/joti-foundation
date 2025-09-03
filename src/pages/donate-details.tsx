import Head from 'next/head'
import Link from 'next/link'

export default function DonateDetails() {
  return (
    <>
      <Head>
        <title>Joti Foundation | Donate</title>
        <meta
          name='description'
          content='Complete your donation to Joti Foundation. Fill in your details and choose your preferred payment method.'
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
      <section className='checkout-page'>
        <div className='auto-container'>
          {/* Checkout Details */}
          <div className='checkout-form'>
            <form method='post' action='/api/donate'>
              <div className='billing-detail'>
                <div className='row clearfix'>
                  <div className='billing-column col-lg-6 col-md-12 col-sm-12'>
                    <h3 className='checkout-title'>Donor Details</h3>
                    <div className='row clearfix'>
                      {/* Form Group - First Name */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          First Name <sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='firstName'
                          value=''
                          placeholder='Enter First Name'
                          required
                        />
                      </div>

                      {/* Form Group - Last Name */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>Last Name</div>
                        <input
                          type='text'
                          name='lastName'
                          value=''
                          placeholder='Enter Last Name'
                        />
                      </div>

                      {/* Form Group - Company Name */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>Company Name</div>
                        <input
                          type='text'
                          name='companyName'
                          value=''
                          placeholder='Enter Company Name'
                        />
                      </div>

                      {/* Form Group - Email Address */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>Email Address</div>
                        <input
                          type='email'
                          name='email'
                          value=''
                          placeholder='Enter Email Address'
                        />
                      </div>

                      {/* Form Group - Phone Number */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Phone Number<sup>*</sup>
                        </div>
                        <input
                          type='tel'
                          name='phone'
                          value=''
                          placeholder='Enter Phone Number'
                          required
                        />
                      </div>

                      {/* Form Group - Pan Number */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Pan Number<sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='panNumber'
                          value=''
                          placeholder='Enter Pan Number'
                          required
                        />
                      </div>

                      {/* Form Group - Aadhaar Number */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Aadhaar Number<sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='aadhaarNumber'
                          value=''
                          placeholder='Enter Aadhaar Number'
                          required
                        />
                      </div>

                      {/* Form Group - Address */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12 address'>
                        <div className='field-label'>
                          Address <sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='address'
                          value=''
                          placeholder='Address'
                          required
                        />
                      </div>

                      {/* Form Group - Town / City */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Town / City <sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='city'
                          value=''
                          placeholder='Town / City'
                          required
                        />
                      </div>

                      {/* Form Group - State */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          State <sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='state'
                          value=''
                          placeholder='State'
                          required
                        />
                      </div>

                      {/* Form Group - Country */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Country <sup>*</sup>
                        </div>
                        <select name='country' required>
                          <option value=''>Select Country</option>
                          <option value='India'>India</option>
                          <option value='Australia'>Australia</option>
                          <option value='Usa'>USA</option>
                        </select>
                      </div>

                      {/* Form Group - Zip Code */}
                      <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                        <div className='field-label'>
                          Zip Code <sup>*</sup>
                        </div>
                        <input
                          type='text'
                          name='zipCode'
                          value=''
                          placeholder='Zip Code'
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className='payment-options'>
                <h3>Payment Process</h3>
                <ul>
                  <li>
                    <div className='radio-option'>
                      <input
                        type='radio'
                        name='payment-group'
                        id='payment-1'
                        defaultChecked
                      />
                      <label htmlFor='payment-1'>
                        <strong>Direct Bank Transfer</strong>
                        <span className='small-text'>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='radio-option'>
                      <input type='radio' name='payment-group' id='payment-3' />
                      <label htmlFor='payment-3'>
                        <strong>PayPal</strong>
                      </label>
                    </div>
                  </li>
                </ul>
                <div className='btn-box'>
                  <button
                    type='submit'
                    className='theme-btn btn-style-one place-order'
                  >
                    <span className='btn-title'>Place Order</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
