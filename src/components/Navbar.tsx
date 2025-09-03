import Link from 'next/link'
import React from 'react'

// Pixel-perfect, accessible, mobile-first Navbar
// — Desktop: logo left, links center, 3 CTAs right (rounded pills)
// — Mobile: clean top bar with hamburger → left drawer with links, CTAs, socials
// — Tailwind required; drop in as <Navbar active="/"> in Next/React

export default function Navbar({ active = '/' }: { active?: string }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/causes', label: 'Our Causes' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/news', label: 'News & Media' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className='sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'>
      <nav
        aria-label='Primary'
        className='mx-auto max-w-[1200px] px-3 sm:px-6 lg:px-8'
      >
        <div className='flex h-[76px] items-center justify-between gap-4'>
          {/* Logo */}
          <Link
            href='/'
            className='inline-flex items-center gap-3 shrink-0'
            aria-label='Joti Foundation home'
          >
            <Logo className='h-8 w-8 sm:h-9 sm:w-9' />
            <div className='leading-[1]'>
              <div className='text-[18px] font-semibold tracking-[0.02em] text-[#1f1f24]'>
                JOTI
              </div>
              <div className='-mt-[2px] text-[12px] sm:text-[13px] font-semibold tracking-wide text-[#1f1f24]'>
                FOUNDATION
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-8 text-[15px] font-medium text-[#1f1f24]'>
              {links.map((l) => (
                <li key={l.href} className='relative'>
                  <Link
                    href={l.href}
                    className='hover:text-[#e4554b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4554b] rounded-sm px-1 py-2'
                  >
                    {l.label}
                  </Link>
                  {/* active underline */}
                  {active === l.href && (
                    <span className='absolute left-0 right-0 -bottom-[6px] mx-auto block h-[2px] w-[28px] rounded bg-[#e4554b]' />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTAs */}
          <div className='hidden lg:flex items-center gap-3'>
            <CTA href='#partner'>Partner</CTA>
            <CTA href='#volunteer'>Volunteer</CTA>
            <CTA href='#donate'>Donate</CTA>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className='lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4554b]'
            aria-label='Open menu'
            aria-expanded={open}
            aria-controls='mobile-drawer'
          >
            <Hamburger />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id='mobile-drawer'
        className={`fixed inset-y-0 left-0 z-[60] w-[86%] max-w-[340px] bg-white shadow-xl transition-transform duration-300 will-change-transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-center justify-between pl-4 pr-2 h-[66px] border-b'>
          <Link
            href='/'
            className='inline-flex items-center gap-3'
            onClick={() => setOpen(false)}
          >
            <Logo className='h-8 w-8' />
            <div className='leading-[1]'>
              <div className='text-[18px] font-semibold tracking-[0.02em] text-[#1f1f24]'>
                JOTI
              </div>
              <div className='-mt-[2px] text-[12px] font-semibold tracking-wide text-[#1f1f24]'>
                FOUNDATION
              </div>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4554b]'
            aria-label='Close menu'
          >
            <CloseIcon />
          </button>
        </div>

        <div className='px-4 py-5 overflow-y-auto h-[calc(100dvh-66px)]'>
          <ul className='space-y-1 text-[15px] font-medium text-[#1f1f24]'>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4554b] ${
                    active === l.href ? 'text-[#e4554b]' : 'hover:bg-[#f7f7f8]'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className='mt-6 space-y-3'>
            <CTA block href='#partner'>
              Partner
            </CTA>
            <CTA block href='#volunteer'>
              Volunteer
            </CTA>
            <CTA block href='#donate'>
              Donate
            </CTA>
          </div>

          {/* Socials */}
          <div className='mt-8 flex items-center gap-5 pl-1'>
            <IconLink label='Facebook' href='#'>
              <Facebook className='h-5 w-5' />
            </IconLink>
            <IconLink label='LinkedIn' href='#'>
              <LinkedIn className='h-5 w-5' />
            </IconLink>
            <IconLink label='YouTube' href='#'>
              <YouTube className='h-5 w-5' />
            </IconLink>
            <IconLink label='Instagram' href='#'>
              <Instagram className='h-5 w-5' />
            </IconLink>
          </div>
        </div>
      </aside>
    </header>
  )
}

function CTA({
  href,
  children,
  block = false,
}: {
  href: string
  children: React.ReactNode
  block?: boolean
}) {
  return (
    <Link
      href={href}
      className={`${
        block ? 'w-full justify-center px-5 py-3' : 'px-4 py-2'
      } inline-flex items-center rounded-full text-white font-semibold tracking-wide shadow-sm transition-[transform,box-shadow] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e4554b]`}
      style={{ backgroundColor: '#e4554b' }}
    >
      {children}
    </Link>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className='text-[#1f1f24]/70 hover:text-[#e4554b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4554b] rounded'
    >
      {children}
    </Link>
  )
}

function Hamburger() {
  return (
    <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
      <path
        d='M4 7h16M4 12h16M4 17h16'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
      <path
        d='M6 6l12 12M18 6l-12 12'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

function Logo({ className = '' }: { className?: string }) {
  // Simple, bold mark that matches the screenshot vibe
  return (
    <svg viewBox='0 0 64 64' className={className} aria-hidden='true'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stopColor='#111' />
          <stop offset='100%' stopColor='#222' />
        </linearGradient>
      </defs>
      <rect x='8' y='8' width='48' height='48' rx='12' fill='url(#g)' />
      <circle cx='46' cy='18' r='5' fill='#e4554b' />
      <path d='M22 44V24h12c6 0 10 4 10 10s-4 10-10 10H22z' fill='#fff' />
      <path
        d='M22 24h12c5.5 0 9 3.5 9 9s-3.5 9-9 9H22V24z'
        fill='#e4554b'
        opacity='.2'
      />
    </svg>
  )
}

// --- Social Icons (minimal, currentColor) ---
function Facebook({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z' />
    </svg>
  )
}
function LinkedIn({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect x='2' y='9' width='4' height='12' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  )
}
function YouTube({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22.54 6.42a3 3 0 0 0-2.12-2.12C18.88 4 12 4 12 4s-6.88 0-8.42.3A3 3 0 0 0 1.46 6.42 31.77 31.77 0 0 0 1 12a31.77 31.77 0 0 0 .46 5.58 3 3 0 0 0 2.12 2.12C5.12 20 12 20 12 20s6.88 0 8.42-.3a3 3 0 0 0 2.12-2.12A31.77 31.77 0 0 0 23 12a31.77 31.77 0 0 0-.46-5.58z' />
      <path d='M9.75 8.5v7l6-3.5-6-3.5z' fill='currentColor' />
    </svg>
  )
}
function Instagram({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='3' y='3' width='18' height='18' rx='5' />
      <circle cx='12' cy='12' r='3.5' />
      <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
    </svg>
  )
}
