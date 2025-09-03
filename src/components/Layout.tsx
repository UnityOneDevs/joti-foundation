import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = 'Joti Foundation',
  description = 'Joti Foundation - Fighting for the abolition of poverty, gender inequality and a more sustainable future.',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <link
          rel='shortcut icon'
          href='/images/favicon.png'
          type='image/x-icon'
        />
        <link rel='icon' href='/images/favicon.png' type='image/x-icon' />

        {/* Font Awesome */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
        />
      </Head>

      <div className='page-wrapper'>
        {/* Main Header */}
        <header className='main-header'>
          {/* Header Upper */}
          <div className='header-upper'>
            <div className='container'>
              <div className='inner-container clearfix'>
                {/* Logo */}
                <div className='logo-box'>
                  <div className='logo'>
                    <Link href='/'>
                      <Image
                        src='/images/logo-new.png'
                        alt='Joti Foundation'
                        width={200}
                        height={60}
                      />
                    </Link>
                  </div>
                </div>
                {/* Nav Box */}
                <div className='nav-outer clearfix'>
                  {/* Mobile Navigation Toggler */}
                  <div className='mobile-nav-toggler'>
                    <span className='icon flaticon-menu-1'></span>
                  </div>
                  {/* Main Menu */}
                  <nav className='main-menu navbar-expand-md navbar-light'>
                    <div
                      className='collapse navbar-collapse show clearfix'
                      id='navbarSupportedContent'
                    >
                      <ul className='navigation clearfix'>
                        <li>
                          <Link href='/'>Home</Link>
                        </li>
                        <li className='dropdown'>
                          <a href='#'>About us</a>
                          <ul>
                            <li>
                              <Link href='/about'>Governor Body</Link>
                            </li>
                            <li>
                              <Link href='/annual-reports'>Annual Reports</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href='/our-causes'>Our Causes</Link>
                        </li>
                        <li>
                          <Link href='/gallery'>Gallery</Link>
                        </li>
                        <li>
                          <Link href='/news-media'>News & Media</Link>
                        </li>
                        <li>
                          <Link href='/contact'>Contact Us</Link>
                        </li>
                        <li className='donate-link'>
                          <Link
                            href='/partner'
                            className='theme-btn btn-style-one'
                          >
                            <span className='btn-title'>Partner</span>
                          </Link>
                        </li>
                        <li className='donate-link'>
                          <Link
                            href='/volunteer'
                            className='theme-btn btn-style-one'
                          >
                            <span className='btn-title'>Volunteer</span>
                          </Link>
                        </li>
                        <li>
                          <a
                            href='https://pages.razorpay.com/pl_Nw26gwxdMsIh53/view'
                            className='theme-btn btn-style-one'
                          >
                            <span className='btn-title'>Donate</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* End Header Upper */}

          {/* Sticky Header */}
          <div className='sticky-header'>
            <div className='container clearfix'>
              {/* Logo */}
              <div className='logo pull-left'>
                <Link href='/' title=''>
                  <span className='logo2'>
                    <Image
                      src='/images/logo-new.png'
                      alt='Joti Foundation'
                      width={200}
                      height={60}
                    />
                  </span>
                </Link>
              </div>
              {/* Right Col */}
              <div className='pull-right'>
                {/* Main Menu */}
                <nav className='main-menu clearfix'></nav>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className='mobile-menu'>
            <div className='menu-backdrop'></div>
            <div className='close-btn'>
              <span className='icon flaticon-cancel'></span>
            </div>

            <nav className='menu-box'>
              <div className='nav-logo'>
                <Link href='/'>
                  <Image
                    src='/images/logo-new.png'
                    alt='Joti Foundation'
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
              <div className='menu-outer'>
                {/* Menu will come automatically via JavaScript */}
              </div>
              {/* Social Links */}
              <div className='social-links'>
                <ul className='clearfix'>
                  <li>
                    <a href='https://www.facebook.com/JotiFoundation'>
                      <span className='fab fa-facebook-square'></span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/joti-foundation/'>
                      <span className='fab fa-linkedin'></span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/@jotifoundation'>
                      <span className='fab fa-youtube'></span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/jotifoundation/?hl=en'>
                      <span className='fab fa-instagram'></span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Main Footer */}
        <footer className='main-footer'>
          <div className='auto-container'>
            {/* Widgets Section */}
            <div className='widgets-section'>
              <div className='row clearfix'>
                {/* Column */}
                <div className='column col-lg-4 col-md-6 col-sm-12'>
                  <div className='footer-widget links-widget'>
                    <div className='widget-content'>
                      <h3>Menu</h3>
                      <ul>
                        <li>
                          <Link href='/about'>About Us</Link>
                        </li>
                        <li>
                          <Link href='/our-causes'>Our Causes</Link>
                        </li>
                        <li>
                          <Link href='/gallery'>Gallery</Link>
                        </li>
                        <li>
                          <Link href='/news-media'>News & Media</Link>
                        </li>
                        <li>
                          <Link href='/contact'>Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='column col-lg-4 col-md-6 col-sm-12'>
                  <div className='footer-widget links-widget'>
                    <div className='widget-content'>
                      <h3>Our Causes</h3>
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
                </div>
                {/* Column */}
                <div className='column col-lg-4 col-md-6 col-sm-12'>
                  <div className='footer-widget info-widget'>
                    <div className='widget-content'>
                      <h3>Contacts</h3>
                      <ul className='contact-info asd'>
                        <li>
                          <span className='icon fa fa-phone-alt'></span>
                          <a href='tel:+91-9315064855'>+91-9315064855</a>
                        </li>
                        <li>
                          <span className='icon fa fa-envelope'></span>
                          <a href='mailto:info@jotifoundation.org'>
                            info@jotifoundation.org
                          </a>
                        </li>
                        <li>
                          <span className='icon fa fa-map'></span>
                          Gurgaon, Haryana, India - 122102
                        </li>
                        <li>
                          <span className='icon fa fa-map'></span>
                          Muktsar, Punjab, India - 152032
                        </li>
                      </ul>
                      <br />
                      <ul className='social-links clearfix'>
                        <li>
                          <a href='https://www.facebook.com/JotiFoundation'>
                            <span className='fab fa-facebook-f'></span>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.linkedin.com/company/joti-foundation'>
                            <span className='fab fa-linkedin'></span>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.youtube.com/@jotifoundation'>
                            <span className='fab fa-youtube'></span>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/jotifoundation/?hl=en'>
                            <span className='fab fa-instagram'></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className='footer-bottom'>
            <div className='auto-container'>
              <div className='clearfix'>
                <div className='copyright'>
                  Joti Foundation &copy; 2023 All Right Reserved
                </div>
                <ul className='bottom-links'>
                  <li>
                    <Link href='/terms-and-conditions'>Terms of Service</Link>
                  </li>
                  <li>
                    <Link href='/refund-policy'>Refund Policy</Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to top */}
      <div className='scroll-to-top scroll-to-target' data-target='html'>
        <span className='flaticon-up-arrow'></span>
      </div>

      {/* JavaScript Files - Load in correct order */}
      <Script
        id='jquery-script'
        src='/js/jquery.js'
        strategy='beforeInteractive'
        onLoad={() => {
          // Load other scripts only after jQuery is ready
          const script = document.createElement('script')
          script.src = '/js/popper.min.js'
          document.head.appendChild(script)

          script.onload = () => {
            const bootstrapScript = document.createElement('script')
            bootstrapScript.src = '/js/bootstrap.min.js'
            document.head.appendChild(bootstrapScript)

            bootstrapScript.onload = () => {
              const uiScript = document.createElement('script')
              uiScript.src = '/js/jquery-ui.js'
              document.head.appendChild(uiScript)

              uiScript.onload = () => {
                const fancyboxScript = document.createElement('script')
                fancyboxScript.src = '/js/jquery.fancybox.js'
                document.head.appendChild(fancyboxScript)

                fancyboxScript.onload = () => {
                  const mixitupScript = document.createElement('script')
                  mixitupScript.src = '/js/mixitup.js'
                  document.head.appendChild(mixitupScript)

                  mixitupScript.onload = () => {
                    const owlScript = document.createElement('script')
                    owlScript.src = '/js/owl.js'
                    document.head.appendChild(owlScript)

                    owlScript.onload = () => {
                      const appearScript = document.createElement('script')
                      appearScript.src = '/js/appear.js'
                      document.head.appendChild(appearScript)

                      appearScript.onload = () => {
                        const wowScript = document.createElement('script')
                        wowScript.src = '/js/wow.js'
                        document.head.appendChild(wowScript)

                        wowScript.onload = () => {
                          const lazyloadScript =
                            document.createElement('script')
                          lazyloadScript.src = '/js/lazyload.js'
                          document.head.appendChild(lazyloadScript)

                          lazyloadScript.onload = () => {
                            const scrollbarScript =
                              document.createElement('script')
                            scrollbarScript.src = '/js/scrollbar.js'
                            document.head.appendChild(scrollbarScript)

                            scrollbarScript.onload = () => {
                              const mainScript =
                                document.createElement('script')
                              mainScript.src = '/js/script.js'
                              document.head.appendChild(mainScript)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }}
      />
    </>
  )
}
