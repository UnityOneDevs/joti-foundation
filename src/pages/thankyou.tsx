import Head from 'next/head'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You for Your Inquiry - Joti Foundation</title>
        <meta
          name='description'
          content='Thank you for reaching out to Joti Foundation. We appreciate your inquiry and will respond shortly.'
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f8f8f8',
          textAlign: 'center',
          margin: '50px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Image
            src='/images/logo-new.png'
            alt='Joti Foundation Logo'
            width={200}
            height={100}
            style={{ marginBottom: '20px' }}
          />
          <h1 style={{ color: '#3498db' }}>Thank You for Reaching Out!</h1>
          <p style={{ color: '#555' }}>
            We appreciate your inquiry. Our team is already working on it, and
            you can expect a response shortly.
          </p>
          <p style={{ color: '#555' }}>
            Stay connected with us on social media:
          </p>

          <div style={{ marginTop: '20px' }}>
            <a
              href='https://twitter.com/JotiFoundation'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                margin: '0 10px',
                color: '#3498db',
                textDecoration: 'none',
              }}
            >
              Twitter
            </a>{' '}
            |
            <a
              href='https://www.facebook.com/JotiFoundation'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                margin: '0 10px',
                color: '#3498db',
                textDecoration: 'none',
              }}
            >
              Facebook
            </a>{' '}
            |
            <a
              href='https://www.linkedin.com/company/joti-foundation'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                margin: '0 10px',
                color: '#3498db',
                textDecoration: 'none',
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
