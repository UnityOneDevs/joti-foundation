import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout
      title='Joti Foundation | Contact Us'
      description='Get in touch with Joti Foundation. Contact us for inquiries, partnerships, or to learn more about our initiatives.'
    >
      <Head>
        <title>Joti Foundation | Contact Us</title>
        <meta
          name='description'
          content='Get in touch with Joti Foundation. Contact us for inquiries, partnerships, or to learn more about our initiatives.'
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
          <h1>Contact Us</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Contact Us</li>
          </ul>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className='contact-info-section'>
        <div className='auto-container'>
          <div className='sec-title centered'>
            <span className='font-s'>Get In Touch</span>
          </div>

          <div className='info-boxes'>
            <div className='row clearfix'>
              {/* Info Box - Location */}
              <div className='info-box col-lg-4 col-md-6 col-sm-12'>
                <div className='inner-box wow fadeInUp' data-wow-delay='0ms'>
                  <div
                    className='image-layer lazy-image'
                    style={{
                      backgroundImage:
                        "url('/images/resource/contact-image-1.jpg')",
                    }}
                  ></div>
                  <div className='icon-box'>
                    <span className='flaticon-home-location-marker'></span>
                  </div>
                  <h4>Our Location</h4>
                  <ul>
                    <li>Gurgaon, Haryana, India - 122102</li>
                    <li>Muktsar, Punjab, India - 152032</li>
                  </ul>
                </div>
              </div>

              {/* Info Box - Phone */}
              <div className='info-box col-lg-4 col-md-6 col-sm-12'>
                <div className='inner-box wow fadeInUp' data-wow-delay='300ms'>
                  <div className='icon-box'>
                    <span className='flaticon-phone-call'></span>
                  </div>
                  <h4>Phone Number</h4>
                  <ul>
                    <li>
                      <a href='tel:+91-9315064855'>+91-9315064855</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Info Box - Email */}
              <div className='info-box col-lg-4 col-md-6 col-sm-12'>
                <div className='inner-box wow fadeInUp' data-wow-delay='600ms'>
                  <div
                    className='image-layer lazy-image'
                    style={{
                      backgroundImage:
                        "url('/images/resource/contact-image-3.jpg')",
                    }}
                  ></div>
                  <div className='icon-box'>
                    <span className='flaticon-email'></span>
                  </div>
                  <h4>Email Address</h4>
                  <ul>
                    <li>
                      <a href='mailto:info@jotifoundation.org'>
                        info@jotifoundation.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='contact-section'>
        <div className='outer-container clearfix'>
          <div className='form-column clearfix'>
            <div className='inner clearfix'>
              <div className='sec-title centered'>
                <h2>Inquiry leave a message</h2>
                <br />
              </div>

              {/* Contact Form */}
              <div className='contact-form'>
                <form method='post' action='/api/contact' id='contact-form'>
                  <div className='row clearfix'>
                    <div className='col-md-6 col-sm-12 form-group'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        required
                      />
                    </div>
                    <div className='col-md-6 col-sm-12 form-group'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        required
                      />
                    </div>
                    <div className='col-md-12 col-sm-12 form-group'>
                      <textarea
                        name='message'
                        placeholder='Write your message'
                      ></textarea>
                    </div>
                    <div className='col-md-12 col-sm-12 form-group text-center'>
                      <button
                        className='theme-btn btn-style-one'
                        type='submit'
                        name='submit-form'
                      >
                        <span className='btn-title'>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
