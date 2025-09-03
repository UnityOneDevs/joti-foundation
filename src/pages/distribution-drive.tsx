import Head from 'next/head'
import Link from 'next/link'

export default function DistributionDrive() {
  return (
    <>
      <Head>
        <title>Joti Foundation | Distribution Drive</title>
        <meta
          name='description'
          content="Distribution Drive - Joti Foundation's initiative to redistribute happiness and spread smiles by providing fresh clothes to villages across Punjab."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner123'>
        <div className='slide-item videi-slider'>
          <div className='image-layer123 lazy-image123'>
            <div className='overlay'></div>
            <video playsInline autoPlay muted loop>
              <source
                src='/images/thumbnail/Distribution-drive.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>

      {/* Sidebar Page Container */}
      <div className='sidebar-page-container'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Content Side */}
            <div className='content-side col-lg-8 col-md-12 col-sm-12'>
              {/* Cause Details */}
              <div className='cause-details'>
                <div className='inner-box'>
                  <div className='lower-content'>
                    <div className='text-content'>
                      <h2>Distribution Drive</h2>
                      <p>
                        At Joti Foundation, we believe in the power of small
                        gestures to make a big difference. Our initiative,
                        "Redistributing Happiness and Spreading Smiles,"
                        epitomizes this ethos as we embarked on a mission to
                        bring joy to the villages of Punjab through the
                        distribution of fresh clothes.
                      </p>

                      <p>
                        Clothing holds immense significance beyond its
                        functional purpose. It symbolizes dignity, comfort, and
                        self-esteem. Unfortunately, in many rural areas, access
                        to adequate clothing remains a challenge, impacting the
                        well-being and confidence of individuals and families.
                        Recognizing this, we set out to address this issue and
                        spread happiness in the process.
                      </p>

                      <p>
                        Our distribution drive spanned approximately 30 villages
                        across Punjab, reaching out to communities in need. Each
                        village visit was marked by warmth, compassion, and a
                        shared sense of solidarity. Witnessing the smiles and
                        gratitude on the faces of the recipients reaffirmed the
                        importance of our endeavor.
                      </p>

                      <p>
                        The impact of providing fresh clothes extends far beyond
                        mere material possessions. It fosters a sense of
                        belonging and uplifts spirits, instilling hope for a
                        brighter future. Moreover, it encourages community
                        cohesion and reinforces the bonds of compassion and
                        support.
                      </p>
                    </div>
                    <div className='link-box'>
                      <Link href='/donate' className='theme-btn btn-style-one'>
                        <span className='btn-title'>Donate Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Side */}
            <div className='sidebar-side col-lg-4 col-md-12 col-sm-12'>
              <aside className='sidebar'>
                {/* Our Causes */}
                <div className='sidebar-widget categories'>
                  <h3 className='sidebar-title'>Our Causes</h3>

                  <div className='widget-content'>
                    <ul>
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
                      <li className='current'>
                        <Link href='/distribution-drive'>
                          Distribution Drive
                        </Link>
                      </li>
                      <li>
                        <Link href='/empower-ed'>Empower-ED</Link>
                      </li>
                      <li>
                        <Link href='/health-camps'>Health Camps</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
