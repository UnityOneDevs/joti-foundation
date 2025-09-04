import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function RefundPolicy() {
  return (
    <Layout
      title='Joti Foundation | Refund Policy'
      description='Joti Foundation Refund Policy - Learn about our donation refund process and terms.'
    >
      <Head>
        <title>Joti Foundation | Refund Policy</title>
        <meta
          name='description'
          content='Joti Foundation Refund Policy - Learn about our donation refund process and terms.'
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
          <h1>Refund Policy</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>Refund Policy</li>
          </ul>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className='contact-info-section'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <h2>Donation Refund Policy</h2>
              <p>
                Joti Foundation is instituting a donation refund policy to
                ensure fair and transparent processing of requests for refund of
                donations as digital payments are becoming more frequent. Joti
                Foundation expects that all donors will exercise due care and
                diligence while making donations. Joti Foundation also
                recognises that a donation may be made erroneously or donors may
                change their mind.
              </p>
              <p>
                Joti Foundation will examine each request for refund of donation
                and endeavour to make the refund. Joti Foundation may also seek
                further information / documents and donor must co-operate in
                this regard.
              </p>
              <p>
                However, Joti Foundation is not obliged to make refunds and may,
                in its discretion, decline any requests for refund of donations,
                particularly if a tax exemption certificate has been issued.
              </p>
              <p>
                If you would like your donation to Joti Foundation to be
                refunded, You must request Joti Foundation in writing or by
                email for a refund and Your request must reach Joti Foundation
                within 15 (fifteen) days from the date on which you made the
                donation i.e. the date on which you: Made the donation online,
                electronically or through other means, OR Handed over the cheque
                / demand draft to Joti Foundation or someone authorised by Joti
                Foundation for this purpose, OR Despatched the cheque / demand
                draft to Joti Foundation by other means.
              </p>
              <p>
                The request stating reason for requesting refund sent to us all
                the following details pertaining to the donation:
              </p>
              <ol>
                <li>
                  <strong>Date of donation</strong>
                </li>
                <li>
                  <strong>Donation amount</strong>
                </li>
                <li>
                  <strong>
                    If donation was made through cheque/draft, please provide
                    Cheque/Draft no.
                  </strong>
                </li>
                <li>
                  <strong>
                    If donation was made through credit card, please provide
                    Credit Card no. (last 4 digits only).
                  </strong>
                </li>
                <li>
                  <strong>
                    If donation was made online, please provide Donation-ID.
                  </strong>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
