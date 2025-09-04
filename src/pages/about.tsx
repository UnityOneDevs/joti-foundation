import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout
      title='Joti Foundation | About us'
      description='Joti Foundation - Fighting for the abolition of poverty, gender inequality and a more sustainable future. Join us in making a difference.'
    >
      <Head>
        <title>Joti Foundation | About us</title>
        <meta
          name='description'
          content='Learn about Joti Foundation - ignite the future of our country. Meet our team and mission.'
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg8.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve alternate'> </div>

        <div className='auto-container'>
          <h1>About us</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>About us</li>
          </ul>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className='mission-vision'>
        <div className='circle-one'></div>
        <div className='circle-two'></div>

        <div className='auto-container'>
          <div className='mission'>
            <div className='row clearfix'>
              <div className='text-column col-lg-6 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='sec-title'>
                    <h2>
                      <span className='font-s'>
                        We can't help everyone, but everyone can help someone.
                      </span>
                    </h2>
                    <div className='text'>
                      <b>Joti foundation - ignite the future of our country</b>
                      <br />
                      We, at Joti Foundation are driven by empathy and a strong
                      sense of justice to fight for the abolition of poverty,
                      gender inequality and a more sustainable future. We strive
                      to build a future in which children do not go hungry but
                      thrive, women do not hide but shine, villages do not
                      struggle but grow and people with disabilities do not give
                      up on the idea of a secure, healthy and nourished future
                      where there is no discrimination. Team Joti Foundation
                      vows to work at grassroot level and connect with the
                      people in a better way. This would further our
                      understanding of their needs- emotionally, mentally,
                      physically and psychologically. We are here to reform the
                      system, spark our country's future and make a difference
                      in the lives of others!
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='image-column col-lg-6 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <Image
                    src='/images/about2.png'
                    alt='Joti Foundation Mission'
                    width={600}
                    height={400}
                    className='lazy-image loaded'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='bg-grey mt-60 mb-60'>
        <div className='auto-container'>
          {/* Team Member 1 */}
          <div className='team' style={{ border: '0px solid #000' }}>
            <div className='row clearfix'>
              <div
                className='image-column col-lg-4 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <Image
                    src='/images/team-image-1.jpg'
                    alt='Late Prabjot Singh'
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className='text-column col-lg-8 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='sec-title'>
                    <h2>Late Prabjot Singh</h2>
                    <b>Our Inspiration</b>
                    <p>
                      Late Prabjot Singh, loving father, husband and
                      philanthropist is the true inspiration behind the founding
                      of Joti Foundation. Mr. Prabjot Singh was the most-trusted
                      and humble personality in his hometown, Sri Muktsar Sahib,
                      Punjab. With his great heartedness and magnanimous spirit,
                      he led the expansion and development of the entire town
                      without singing any of his efforts. Every soul that
                      crossed his path, was openly welcomed for any help that
                      they ever required. His charitable tales have no end even
                      today, as people visit Sherewala, they are told of a
                      leader who took care of several families in need, took it
                      upon himself to fund the education of children and help
                      young women to stand on their own feet, help officials
                      looking for guidance and any support; and many such good
                      deeds that have become an inspiration for many.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className='team p-style1' style={{ border: '0px solid #000' }}>
            <div className='row clearfix'>
              <div
                className='image-column col-lg-4 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <Image
                    src='/images/team-image-2.jpg'
                    alt='Mrs. Prabkiran Brar'
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className='text-column col-lg-8 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='sec-title'>
                    <h2>Mrs. Prabkiran Brar</h2>
                    <b>Chairperson</b>
                    <br />
                    <p>
                      "Thanks to Mrs. Prabkiran ji, today, I am in Canada
                      majoring in Literature. Without her supporting me and my
                      family, we would not have been able to turn our lives
                      around. We are forever grateful. God bless!" – Muskaan
                    </p>
                    <p>
                      During her school days at Convent Of Jesus And Mary
                      Waverley, Mussoorie, Mrs Prabkiran discovered her natural
                      talent of being a teacher and was drawn to it even more
                      during her college time. She noticed many disadvantaged
                      children in her locality and took it upon herself to start
                      teaching them with great passion and sincerity. Many
                      children who were lucky enough to attend school started
                      doing exceptionally well in their studies and behaviorally
                      at home, many could start conversing in English fluently
                      which solidified her aim to ensure inclusive and equitable
                      quality education for all. Since the past decade, Mrs
                      Prabkiran has been actively funding education and teaching
                      poor children in Sherewala, her father's hometown. Mrs
                      Prabkiran is the founding Chairperson of Joti Foundation
                      that is dedicated to Promote Lifelong Learning
                      Opportunities for underprivileged children across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className='team' style={{ border: '0px solid #000' }}>
            <div className='row clearfix'>
              <div
                className='image-column col-lg-4 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <Image
                    src='/images/team-image-3.jpg'
                    alt='Mrs. Sarabjit Kaur'
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className='text-column col-lg-8 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='sec-title'>
                    <h2>Mrs. Sarabjit Kaur</h2>
                    <b>Trustee</b>
                    <p>
                      Mrs. Sarabjit Kaur, a mother of two and a woman of virtue
                      single-handedly takes care of all the groundwork at the
                      grass root level. From identifying families and children
                      in need, Mrs. Sarabjit has been responsible for changing
                      hundreds of lives in Punjab. She lives by making it her
                      life mission to help provide what's rightful to an
                      individual – dignity, through all possible means whether
                      that includes giving them food, shelter or financial help.
                    </p>
                    <p>
                      "Too often, great women go unnoticed and without praise.
                      We will change that!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className='team' style={{ border: '0px solid #000' }}>
            <div className='row clearfix'>
              <div
                className='image-column col-lg-4 col-md-12 col-sm-12'
                style={{ border: '0px solid #000' }}
              >
                <div className='inner'>
                  <Image
                    src='/images/team-image-4.jpg'
                    alt='Mr. Ajit Brar'
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className='text-column col-lg-8 col-md-12 col-sm-12'>
                <div className='inner'>
                  <div className='sec-title'>
                    <h2>Mr. Ajit Brar</h2>
                    <b>Trustee</b>
                    <p>
                      A successful lawyer by profession, Mr. Ajit, is a Welham
                      Boy's Alumni who has followed his fathers footsteps in
                      philanthropy. A social minded and big hearted person, Mr.
                      Ajit at a young age, has helped many disadvantaged
                      families and individuals by providing them correct
                      guidance, jobs and financial aid. His aim is to help raise
                      the living standards of the disadvantaged by providing
                      them the means to live a dignified life. In COVID-19,
                      inequalities in education and access to basic amenities
                      have exacerbated and through Joti Foundation, Mr. Ajit
                      believes they can address this crisis and encourage all
                      stakeholders to take transformative actions, individually
                      and collectively, for the people across the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
