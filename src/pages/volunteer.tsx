import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/Layout'
import Notification from '../components/Notification'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setNotification({ message: data.message, type: 'success' })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          qualification: '',
          address: '',
        })
      } else {
        setNotification({ message: data.message, type: 'error' })
      }
    } catch {
      setNotification({
        message: 'Failed to submit form. Please try again.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout
      title='Joti Foundation | Volunteer'
      description='Join Joti Foundation as a volunteer and make a difference in communities. Apply now to be part of our mission.'
    >
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
            <form onSubmit={handleSubmit}>
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
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder='Enter Full Name'
                          required
                        />
                      </div>

                      {/* Form Group - Email */}
                      <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                        <div className='field-label'>Email</div>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleInputChange}
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
                          value={formData.phone}
                          onChange={handleInputChange}
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
                          value={formData.qualification}
                          onChange={handleInputChange}
                          placeholder='Enter Educational Qualification'
                          required
                        />
                      </div>

                      {/* Form Group - Address */}
                      <div className='form-group col-lg-12 col-md-6 col-sm-12'>
                        <div className='field-label'>Address</div>
                        <textarea
                          name='address'
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder='Enter Complete Address'
                          rows={3}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <div className='billing-column col-lg-12 col-md-12 col-sm-12'>
                        <div className='btn-box'>
                          <button
                            type='submit'
                            className='theme-btn btn-style-one place-order'
                            disabled={isSubmitting}
                          >
                            <span className='btn-title'>
                              {isSubmitting
                                ? 'Submitting...'
                                : 'Send Application'}
                            </span>
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

      {/* Notification */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </Layout>
  )
}
