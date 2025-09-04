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

        {/* Custom CSS to ensure navigation is always visible */}
        <style jsx global>{`
          /* Force navigation to be visible on all screens */
          .main-header .nav-outer .main-menu,
          .sticky-header .main-menu {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          .nav-outer .mobile-nav-toggler {
            display: none !important;
          }

          /* Hide sticky header by default - only show when scrolling */
          .sticky-header {
            display: none !important;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          /* Show sticky header only when scrolled */
          .sticky-header.fixed-header {
            display: block !important;
          }

          .main-menu .navigation {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .main-menu .navigation > li {
            margin: 5px 10px;
            position: relative;
          }

          .main-menu .navigation > li > a {
            color: #333;
            text-decoration: none;
            padding: 10px 15px;
            display: block;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .main-menu .navigation > li > a:hover {
            color: #007bff;
          }

          .main-menu .navigation > li.dropdown > ul {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            min-width: 200px;
            z-index: 1000;
            display: none;
            list-style: none;
            margin: 0;
            padding: 0;
            border-radius: 4px;
          }

          .main-menu .navigation > li.dropdown:hover > ul {
            display: block;
          }

          .main-menu .navigation > li.dropdown > ul > li > a {
            padding: 12px 15px;
            display: block;
            font-size: 13px;
            color: #333;
            text-decoration: none;
            border-bottom: 1px solid #eee;
          }

          .main-menu .navigation > li.dropdown > ul > li > a:hover {
            background: #f8f9fa;
            color: #007bff;
          }

          .theme-btn {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s ease;
          }

          .theme-btn:hover {
            background: #0056b3;
            color: white;
          }

          /* Mobile responsive */
          @media only screen and (max-width: 768px) {
            .main-menu .navigation {
              flex-direction: column;
              align-items: flex-start;
              gap: 0;
            }

            .main-menu .navigation > li {
              margin: 0;
              width: 100%;
              border-bottom: 1px solid #eee;
            }

            .main-menu .navigation > li > a {
              padding: 15px 20px;
              border-bottom: none;
            }

            .main-menu .navigation > li.dropdown > ul {
              position: static;
              box-shadow: none;
              background: #f8f9fa;
              margin-left: 20px;
              display: none;
            }

            .main-menu .navigation > li.dropdown:hover > ul {
              display: block;
            }

            .main-menu .navigation > li.dropdown > ul > li > a {
              padding: 10px 20px;
            }

            .donate-link {
              width: 100%;
              text-align: center;
              margin-top: 10px;
            }

            .theme-btn {
              width: 100%;
              text-align: center;
              margin: 5px 0;
            }
          }

          /* Ensure header layout works */
          .header-upper .inner-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .logo-box {
            flex-shrink: 0;
          }

          .nav-outer {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }

          @media only screen and (max-width: 768px) {
            .header-upper .inner-container {
              flex-direction: column;
              align-items: stretch;
            }

            .nav-outer {
              justify-content: center;
              margin-top: 15px;
            }
          }
        `}</style>
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
                  {/* Main Menu */}
                  <nav className='main-menu navbar-expand-md navbar-light'>
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
                      <li className='dropdown'>
                        <a href='#'>Our Causes</a>
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
                          <li>
                            <Link href='/education'>Education</Link>
                          </li>
                        </ul>
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
                <nav className='main-menu clearfix'>
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
                    <li className='dropdown'>
                      <a href='#'>Our Causes</a>
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
                        <li>
                          <Link href='/education'>Education</Link>
                        </li>
                      </ul>
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
                      <Link href='/partner' className='theme-btn btn-style-one'>
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
                </nav>
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
        strategy='afterInteractive'
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

                              // Add sticky header functionality
                              mainScript.onload = () => {
                                // Sticky header functionality
                                const stickyHeader =
                                  document.querySelector('.sticky-header')
                                const headerUpper =
                                  document.querySelector('.header-upper')

                                if (stickyHeader && headerUpper) {
                                  const headerHeight = (
                                    headerUpper as HTMLElement
                                  ).offsetHeight

                                  window.addEventListener('scroll', () => {
                                    if (window.pageYOffset > headerHeight) {
                                      stickyHeader.classList.add('fixed-header')
                                    } else {
                                      stickyHeader.classList.remove(
                                        'fixed-header'
                                      )
                                    }
                                  })
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
            }
          }
        }}
      />
    </>
  )
}
