import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { ReactNode, useEffect, useState } from 'react'

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
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 120 // Approximate header height
      if (window.pageYOffset > headerHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])
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

        {/* Fixed CSS for proper navigation behavior */}
        <style jsx global>{`
          /* Main header styles */
          .main-header {
            position: relative;
            display: block;
            width: 100%;
            z-index: 9999;
            background: #ffffff;
            font-family: 'Open Sans', sans-serif;
          }

          .main-header .header-upper {
            position: relative;
            background: #ffffff;
            transition: all 0.3s ease;
          }

          .main-header .header-upper .inner-container {
            position: relative;
            padding-left: 160px;
            min-height: 81px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .main-header .header-upper .logo-box {
            position: absolute;
            float: left;
            left: 0;
            top: -60px;
            width: 175px;
            height: 230px;
            overflow: hidden;
            z-index: 10;
          }

          .main-header .header-upper .logo-box .logo {
            position: relative;
            display: block;
            padding: 60px 10px 5px;
            text-align: center;
            border-radius: 0px 0px 20px 0px;
          }

          .main-header .header-upper .logo img {
            margin-top: 2px;
            position: absolute;
            display: inline-block;
            max-width: 85%;
            height: auto;
            z-index: 1;
            left: 0px;
          }

          .main-header .nav-outer {
            position: relative;
            float: right;
            width: 100%;
            z-index: 1;
          }

          .main-header .nav-outer .main-menu {
            position: relative;
            float: left;
          }

          .main-menu .navigation {
            display: flex;
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

          /* Sticky header styles */
          .sticky-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-100%);
            transition: all 0.3s ease;
          }

          .sticky-header.fixed-header {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .sticky-header .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .sticky-header .logo {
            flex-shrink: 0;
          }

          .sticky-header .logo img {
            height: 40px;
            width: auto;
          }

          .sticky-header .main-menu .navigation {
            display: flex;
            align-items: center;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .sticky-header .main-menu .navigation > li > a {
            color: #333;
            text-decoration: none;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .sticky-header .main-menu .navigation > li > a:hover {
            color: #007bff;
          }

          /* Mobile navigation toggler */
          .mobile-nav-toggler {
            display: none;
            position: relative;
            float: right;
            font-size: 24px;
            line-height: 50px;
            cursor: pointer;
            margin-left: 25px;
            margin-top: 10px;
            color: #333;
            background: none;
            border: none;
            padding: 0;
          }

          .mobile-nav-toggler:hover {
            color: #007bff;
          }

          /* Mobile menu styles */
          .mobile-menu {
            position: fixed;
            right: 0;
            top: 0;
            width: 300px;
            height: 100vh;
            background: white;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            overflow-y: auto;
          }

          .mobile-menu.mobile-menu-visible {
            transform: translateX(0);
          }

          .mobile-menu .menu-backdrop {
            position: fixed;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .mobile-menu.mobile-menu-visible .menu-backdrop {
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu .menu-box {
            position: relative;
            padding: 30px 25px;
            height: 100%;
          }

          .mobile-menu .close-btn {
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #333;
            background: none;
            border: none;
            padding: 0;
          }

          .mobile-menu .nav-logo {
            text-align: center;
            margin-bottom: 30px;
          }

          .mobile-menu .nav-logo img {
            max-width: 150px;
            height: auto;
          }

          .mobile-menu .navigation {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .mobile-menu .navigation li {
            border-bottom: 1px solid #eee;
          }

          .mobile-menu .navigation li > a {
            display: block;
            padding: 15px 0;
            color: #333;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .mobile-menu .navigation li > a:hover {
            color: #007bff;
          }

          .mobile-menu .navigation li.dropdown > ul {
            display: none;
            list-style: none;
            margin: 0;
            padding: 0;
            background: #f8f9fa;
          }

          .mobile-menu .navigation li.dropdown > ul > li > a {
            padding: 12px 20px;
            font-size: 14px;
            color: #666;
          }

          .mobile-menu .social-links {
            position: absolute;
            bottom: 30px;
            left: 25px;
            right: 25px;
            text-align: center;
          }

          .mobile-menu .social-links ul {
            display: flex;
            justify-content: center;
            gap: 15px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .mobile-menu .social-links a {
            color: #333;
            font-size: 20px;
            transition: color 0.3s ease;
          }

          .mobile-menu .social-links a:hover {
            color: #007bff;
          }

          /* Hide main header when sticky is active */
          .main-header.hide-main-header .header-upper {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-100%);
          }

          /* Responsive styles */
          @media only screen and (max-width: 768px) {
            .main-header .header-upper .inner-container {
              padding-left: 0;
              padding: 15px 20px;
              flex-direction: row;
              justify-content: space-between;
            }

            .main-header .header-upper .logo-box {
              position: relative;
              top: 0;
              left: 0;
              width: auto;
              height: auto;
            }

            .main-header .header-upper .logo-box .logo {
              padding: 0;
              background: none;
              text-align: left;
            }

            .main-header .header-upper .logo img {
              position: relative;
              max-width: 120px;
              height: auto;
            }

            .main-header .nav-outer .main-menu {
              display: none;
            }

            .mobile-nav-toggler {
              display: block;
            }

            .sticky-header .main-menu {
              display: none;
            }

            .sticky-header .container {
              padding: 10px 20px;
            }

            .sticky-header .logo img {
              height: 35px;
            }
          }

          @media only screen and (max-width: 480px) {
            .mobile-menu {
              width: 100%;
            }
          }
        `}</style>
      </Head>

      <div className='page-wrapper'>
        {/* Main Header */}
        <header className={`main-header ${isSticky ? 'hide-main-header' : ''}`}>
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
                  <button
                    className='mobile-nav-toggler'
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label='Open mobile menu'
                  >
                    <span className='icon'>☰</span>
                  </button>
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
          <div className={`sticky-header ${isSticky ? 'fixed-header' : ''}`}>
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
                <nav className='main-menu '>
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
          <div
            className={`mobile-menu ${
              isMobileMenuOpen ? 'mobile-menu-visible' : ''
            }`}
          >
            <div
              className='menu-backdrop'
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className='menu-box'>
              <button
                className='close-btn'
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label='Close mobile menu'
              >
                ×
              </button>
              <div className='nav-logo'>
                <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src='/images/logo-new.png'
                    alt='Joti Foundation'
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
              <div className='menu-outer'>
                <ul className='navigation'>
                  <li>
                    <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className='dropdown'>
                    <a href='#'>About us</a>
                    <ul>
                      <li>
                        <Link
                          href='/about'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Governor Body
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/annual-reports'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Annual Reports
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='dropdown'>
                    <a href='#'>Our Causes</a>
                    <ul>
                      <li>
                        <Link
                          href='/jal-jeevan'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Jal Jeevan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/clearer-vision'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Clearer Vision for Brighter Future
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/disaster-relief'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Disaster Relief
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/samarth'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Samarth
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/distribution-drive'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Distribution Drive
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/empower-ed'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Empower-ED
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/health-camps'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Health Camps
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/education'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Education
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href='/gallery'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/news-media'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      News & Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/partner'
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='theme-btn'
                    >
                      Partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/volunteer'
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='theme-btn'
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <a
                      href='https://pages.razorpay.com/pl_Nw26gwxdMsIh53/view'
                      className='theme-btn'
                    >
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Links */}
              <div className='social-links'>
                <ul>
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
            </div>
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
