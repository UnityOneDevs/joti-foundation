import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function JalJeevan() {
  return (
    <Layout
      title='Joti Foundation | Jal Jeevan'
      description="Jal Jeevan initiative by Joti Foundation - providing clean water to villages in Punjab's Malwa region to combat waterborne diseases."
    >
      <Head>
        <title>Joti Foundation | Jal Jeevan</title>
        <meta
          name='description'
          content="Jal Jeevan initiative by Joti Foundation - providing clean water to villages in Punjab's Malwa region to combat waterborne diseases."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner123'>
        <div className='slide-item videi-slider'>
          <div className='image-layer123 lazy-image123'>
            <div className='overlay'></div>
            <video playsInline autoPlay muted loop>
              <source src='/images/thumbnail/jal-jeevan.mp4' type='video/mp4' />
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
                      <h2>Jal Jeevan</h2>

                      <p>
                        In the heart of Punjab&apos;s Malwa region lies a silent
                        threat: the looming specter of waterborne diseases and
                        cancer caused by the presence of heavy metals such as
                        fluoride, lead, arsenic, and uranium in the water
                        supply. Recognizing the urgent need to address this
                        crisis, Joti Foundation has launched &quot;Jal
                        Jeevan,&quot; a pioneering initiative aimed at providing
                        pristine water to the villages of Punjab.
                      </p>

                      <p>
                        Access to safe drinking water is not just a luxury—it is
                        a fundamental human right. Yet, for far too many
                        residents of Malwa, clean water remains a distant dream.
                        The prevalence of heavy metals in the water sources
                        poses a grave risk to public health, leading to a myriad
                        of diseases including cancer, hepatitis, and cholera.
                      </p>

                      <p>
                        Under the banner of Jal Jeevan, we have embarked on a
                        mission to change this reality. Through strategic
                        partnerships and tireless efforts, we have installed
                        water purification units in villages across Punjab,
                        ensuring that every resident has access to safe, clean
                        water. The impact of Jal Jeevan is profound and
                        far-reaching. More than 30,000 inhabitants of Malwa
                        benefit from this initiative on a daily basis, enjoying
                        the peace of mind that comes with knowing that their
                        water is free from harmful pollutants. Families no
                        longer have to worry about the health risks associated
                        with contaminated water, allowing them to focus on
                        building brighter futures for themselves and their
                        children.
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
                      <li className='current'>
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
                      <li>
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
    </Layout>
  )
}
