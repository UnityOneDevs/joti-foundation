'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type Leaf = { label: string; href: string }
type Node = { label: string; href: string; children: Leaf[] }
type Item = Leaf | Node

/* design tokens */
const ACCENT = '#e64d43'
const TEXT = '#0f1d2d'
const NAV_GAP = 24
const CTA_GAP = 12
const PILL_H = 40
const PILL_PX = 22
const UL_W = 52
const UL_H = 2
const UL_OFFSET = 12

const NAV: Item[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About us',
    href: '/about',
    children: [
      { label: 'Governor Body', href: '/about' },
      { label: 'Annual Reports', href: '/annual-reports' },
    ],
  },
  { label: 'Our Causes', href: '/our-causes' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News & Media', href: '/news-media' },
  { label: 'Contact Us', href: '/contact' },
]

export default function JotiNavbar() {
  const pathname = usePathname()
  const [drawer, setDrawer] = useState(false)
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({})
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const isActive = (href?: string) =>
    href ? (href === '/' ? pathname === '/' : pathname.startsWith(href)) : false
  const isNodeActive = (node: Node) =>
    node.children.some((c) => pathname.startsWith(c.href))

  // lock scroll + ESC to close drawer
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', drawer)
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setDrawer(false)
    window.addEventListener('keydown', onEsc)
    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', onEsc)
    }
  }, [drawer])

  // cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  return (
    <>
      {/* Top Dark Bar */}
      <div className='h-1 bg-gray-800'></div>

      <header className='sticky top-0 z-50 bg-white'>
        <div className='mx-auto max-w-[1200px] px-4 md:px-6'>
          <div className='flex items-center justify-between gap-4 py-2 md:py-3'>
            {/* Logo */}
            <Link
              href='/'
              className='inline-flex items-center'
              aria-label='Joti Foundation'
            >
              <Image
                src='/images/logo-new.png'
                alt='Joti Foundation'
                width={220}
                height={54}
                priority
                className='w-36 h-9 md:w-[220px] md:h-[54px]'
              />
            </Link>

            {/* DESKTOP-ONLY WRAPPER (one gate) */}
            <div
              className='hidden xl:!flex items-center justify-between flex-1'
              style={{ gap: '32px' }}
            >
              {/* Nav links */}
              <nav>
                <ul
                  className='flex flex-nowrap items-center whitespace-nowrap'
                  style={{ columnGap: NAV_GAP }}
                >
                  {NAV.map((it) =>
                    'children' in it ? (
                      <li
                        key={it.label}
                        className='relative'
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout)
                            setHoverTimeout(null)
                          }
                          setHoveredDropdown(it.label)
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setHoveredDropdown(null)
                          }, 100)
                          setHoverTimeout(timeout)
                        }}
                      >
                        <Link
                          href={it.href}
                          className='relative inline-flex items-center gap-1.5 text-[16px] font-semibold leading-none transition-all duration-200'
                          style={{
                            color:
                              hoveredDropdown === it.label ? '#e64d43' : TEXT,
                            padding: '8px 4px',
                            borderRadius: '6px',
                          }}
                          aria-current={isActive(it.href) ? 'page' : undefined}
                        >
                          {it.label}
                          <span
                            className='transition-colors duration-200'
                            style={{
                              color:
                                hoveredDropdown === it.label
                                  ? '#e64d43'
                                  : '#6b7280',
                            }}
                          >
                            ▾
                          </span>
                          {isNodeActive(it) && (
                            <span
                              aria-hidden
                              className='pointer-events-none absolute left-1/2 -translate-x-1/2'
                              style={{
                                bottom: -UL_OFFSET,
                                width: UL_W,
                                height: UL_H,
                                background: ACCENT,
                                borderRadius: 3,
                              }}
                            />
                          )}
                        </Link>

                        {/* Hover dropdown */}
                        <ul
                          className='absolute left-0 top-[calc(100%+12px)] min-w-[240px] rounded-xl bg-white shadow-2xl transition-all duration-200 ease-in-out'
                          style={{
                            visibility:
                              hoveredDropdown === it.label
                                ? 'visible'
                                : 'hidden',
                            opacity: hoveredDropdown === it.label ? 1 : 0,
                            zIndex: 9999,
                            border: '1px solid #e5e7eb',
                            padding: '8px 0',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          {it.children.map((c) => (
                            <li key={c.label} style={{ margin: '0' }}>
                              <Link
                                href={c.href}
                                className='block transition-all duration-200'
                                style={{
                                  color: '#374151',
                                  backgroundColor: 'transparent',
                                  padding: '12px 20px',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  textDecoration: 'none',
                                  border: 'none',
                                  width: '100%',
                                  textAlign: 'left',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    '#f3f4f6'
                                  e.currentTarget.style.color = '#e64d43'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    'transparent'
                                  e.currentTarget.style.color = '#374151'
                                }}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={it.label}>
                        <Link
                          href={it.href}
                          className='relative inline-flex items-center gap-1.5 text-[16px] font-semibold leading-none transition-all duration-200'
                          style={{
                            color: TEXT,
                            padding: '8px 4px',
                            borderRadius: '6px',
                          }}
                          aria-current={isActive(it.href) ? 'page' : undefined}
                        >
                          {it.label}
                          {isActive(it.href) && (
                            <span
                              aria-hidden
                              className='pointer-events-none absolute left-1/2 -translate-x-1/2'
                              style={{
                                bottom: -UL_OFFSET,
                                width: UL_W,
                                height: UL_H,
                                background: ACCENT,
                                borderRadius: 3,
                              }}
                            />
                          )}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              {/* CTA pills */}
              <div className='flex items-center' style={{ gap: CTA_GAP }}>
                <Link
                  href='/partner'
                  className='inline-flex items-center justify-center rounded-full text-[15px] font-extrabold text-white'
                  style={{
                    height: PILL_H,
                    paddingLeft: PILL_PX,
                    paddingRight: PILL_PX,
                    background: ACCENT,
                  }}
                >
                  Partner
                </Link>
                <Link
                  href='/volunteer'
                  className='inline-flex items-center justify-center rounded-full text-[15px] font-extrabold text-white'
                  style={{
                    height: PILL_H,
                    paddingLeft: PILL_PX,
                    paddingRight: PILL_PX,
                    background: ACCENT,
                  }}
                >
                  Volunteer
                </Link>
                <a
                  href='https://pages.razorpay.com/pl_Nw26gwxdMsIh53/view'
                  className='inline-flex items-center justify-center rounded-full text-[15px] font-extrabold text-white'
                  style={{
                    height: PILL_H,
                    paddingLeft: PILL_PX,
                    paddingRight: PILL_PX,
                    background: ACCENT,
                  }}
                >
                  Donate
                </a>
              </div>
            </div>

            {/* HAMBURGER — ONLY < xl */}
            <button
              onClick={() => setDrawer(true)}
              aria-label='Open menu'
              className='inline-flex flex-col gap-1.5 xl:!hidden p-2'
            >
              <span
                className='block h-[2px] w-6 md:w-7'
                style={{ background: ACCENT }}
              />
              <span
                className='block h-[2px] w-6 md:w-7'
                style={{ background: ACCENT }}
              />
              <span
                className='block h-[2px] w-6 md:w-7'
                style={{ background: ACCENT }}
              />
            </button>
          </div>
        </div>
        <div className='h-px w-full bg-black/10' />
      </header>

      {/* OVERLAY — ONLY < xl */}
      <div
        onClick={() => setDrawer(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition xl:!hidden ${
          drawer ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* RIGHT DRAWER — ONLY < xl */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-[320px] max-w-[92vw] transform bg-white shadow-xl transition-transform xl:!hidden ${
          drawer ? 'translate-x-0' : 'translate-x-full'
        }`}
        role='dialog'
        aria-modal='true'
        aria-label='Mobile menu'
      >
        <div className='flex items-center justify-between px-4 md:px-6 py-4'>
          <Link
            href='/'
            onClick={() => setDrawer(false)}
            className='inline-flex'
          >
            <Image
              src='/images/logo-new.png'
              alt='Joti Foundation'
              width={200}
              height={48}
              className='w-32 h-8 md:w-[200px] md:h-[48px]'
            />
          </Link>
          <button
            onClick={() => setDrawer(false)}
            aria-label='Close menu'
            className='text-2xl leading-none'
          >
            ×
          </button>
        </div>

        <nav className='flex h-[calc(100%-64px)] flex-col px-4 md:px-6'>
          <div className='min-h-0 flex-1 overflow-y-auto'>
            <ul className='divide-y divide-black/10'>
              {NAV.map((it) => {
                if ('children' in it) {
                  return (
                    <li key={it.label} className='py-2'>
                      <div className='flex items-center justify-between'>
                        <Link
                          href={it.href}
                          onClick={() => setDrawer(false)}
                          className='flex-1 py-2 md:py-3 text-[15px] font-extrabold uppercase tracking-wide px-2'
                          style={{ color: isActive(it.href) ? ACCENT : TEXT }}
                        >
                          {it.label}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenMobile((s) => ({
                              ...s,
                              [it.label]: !s[it.label],
                            }))
                          }
                          className='ml-2 p-2 md:p-3'
                          aria-expanded={!!openMobile[it.label]}
                        >
                          <span
                            className={`transition ${
                              openMobile[it.label] ? 'rotate-180' : ''
                            }`}
                            style={{ color: TEXT }}
                          >
                            ▾
                          </span>
                        </button>
                      </div>
                      <ul
                        className={`${
                          openMobile[it.label] ? 'block' : 'hidden'
                        } pl-1`}
                      >
                        {it.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.href}
                              onClick={() => setDrawer(false)}
                              className='block py-2 text-sm text-slate-700'
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                } else {
                  return (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        onClick={() => setDrawer(false)}
                        className='block py-2 md:py-3 text-[15px] font-extrabold uppercase tracking-wide px-2'
                        style={{ color: isActive(it.href) ? ACCENT : TEXT }}
                      >
                        {it.label}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>

            {/* drawer pills */}
            <div className='mt-4 grid gap-3 px-2'>
              <Link
                href='/partner'
                onClick={() => setDrawer(false)}
                className='inline-flex h-12 md:h-11 w-full items-center justify-center rounded-full px-4 md:px-5 text-[14px] md:text-[15px] font-extrabold text-white'
                style={{ background: ACCENT }}
              >
                PARTNER
              </Link>
              <Link
                href='/volunteer'
                onClick={() => setDrawer(false)}
                className='inline-flex h-12 md:h-11 w-full items-center justify-center rounded-full px-4 md:px-5 text-[14px] md:text-[15px] font-extrabold text-white'
                style={{ background: ACCENT }}
              >
                VOLUNTEER
              </Link>
              <a
                href='https://pages.razorpay.com/pl_Nw26gwxdMsIh53/view'
                className='inline-flex h-12 md:h-11 w-full items-center justify-center rounded-full px-4 md:px-5 text-[14px] md:text-[15px] font-extrabold text-white'
                style={{ background: ACCENT }}
              >
                DONATE
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
