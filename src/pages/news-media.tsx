import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsMedia() {
  // News data
  const newsItems = [
    {
      date: '28',
      month: 'Feb',
      title: 'ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਨੇ ਰੋਸ਼ਨ ਕੀਤੀ ਸਕੂਲੀ ਬੱਚਿਆਂ ਦੀ ਜਿੰਦਗੀ, ਲਗਾ ਰਹੀ',
      description:
        'ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਇੱਕ ਨਾ-ਲਾਭੀ ਸੰਸਥਾ ਹੈ ਜੋ ਕਿ 2020 ਵਿੱਚ ਮਨੁੱਖਤਾ ਦੀ ਅਨਥੱਕ ਸੇਵਾ ਕਰਨ ਦੀ ਭਾਵਨਾ ਨੁੰ ਲੈ ਕੇ ਹੋਂਦ ਵਿੱਚ ਆਈ । ਇਹ ਸੰਸਥਾ ਰੂਲਰ ਖੇਤਰਾ ਵਿੱਚ ਰਹਿੰਦੇ ਲੋਕਾਂ ਦੇ ਵਿਕਾਸ ਲਈ ਕੰਮ ਕਰ ਰਹੀ ਹੈ',
      image: '/images/blog/blog-img11aa.png',
      link: 'https://punjab.news18.com/news/bhatinda/jyoti-faudison-brightened-up-the-lives-of-school-children-by-wearing-free-glasses-skm-local18-586018.html',
    },
    {
      date: '28',
      month: 'Aug',
      title: 'ਫਾਜ਼ਿਲਕਾ ਜ਼ਿਲੇ ਦੇ 12 ਹੜ੍ਹ ਮਾਰੇ ਪਿੰਡਾਂ ਨੂੰ 400 ਕੁਇੰਟਲ ਸੁੱਕਾ ਰਾਸ਼ਨ',
      description:
        'ਸਮੁੱਚੀ ਮਨੁੱਖਤਾ ਦੇ ਏਕੇ ਨੂੰ ਪ੍ਰਣਾਈ ਸ਼੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਦੇ ਪਿੰਡ ਚੱਕ ਸ਼ੇਰੇਵਾਲਾ ਦੀ ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਇਨਸਾਨੀਅਤ ਦੀ ਪਹਿਰੇਦਾਰ ਬਣ ਕੇ ਮੁੱਢ ਤੋਂ ਹੀ ਲੋਕਾਂ ਦੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਕਰਦੀ ਆ ਰਹੀ ਹੈ। ਮਰਹੂਮ ਸ.',
      image: '/images/gallery/g11.JPG',
      link: 'https://www.arthparkashpunjabnews.com/foundation-fazilika',
    },
    {
      date: '28',
      month: 'Aug',
      title: 'ਹੜ੍ਹ ਪ੍ਰਭਾਵਿਤ ਮਨੁੱਖਤਾ ਦੀ ਮਦਦ ਲਈ ਬਹੁੜੀ ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਫਾਜ਼ਿਲਂਨ',
      description:
        'ਸਮੁੱਚੀ ਮਨੁੱਖਤਾ ਦੇ ਏਕੇ ਨੂੰ ਪ੍ਰਣਾਈ ਸ਼੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਦੇ ਪਿੰਡ ਚੱਕ ਸ਼ੇਰੇਵਾਲਾ ਦੀ ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਇਨਸਾਨੀਅਤ ਦੀ ਪਹਿਰੇਦਾਰ ਬਣ ਕੇ ਮੁੱਢ ਤੋਂ ਹੀ ਲੋਕਾਂ ਦੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਕਰਦੀ ਆ ਰਹੀ ਹੈ। ਮਰਹੂਮ ਸ. ਪ੍ਰਭਜੋਤ ਸਿੰਘ ਬਰਾੜ ਉਹ',
      image: '/images/gallery/g25.JPG',
      link: 'https://jagratilahar.com/punjabi/punjab/89828/Jyoti-Foundation-Flood-Ration-Fazilka-',
    },
    {
      date: '06',
      month: 'Jun',
      title: 'ਹੜ੍ਹ ਪ੍ਰਭਾਵਿਤ ਮਨੁੱਖਤਾ ਦੀ ਮਦਦ ਲਈ ਬਹੁੜੀ ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ',
      description:
        'ਫਾਜ਼ਿਲਕਾ, 28ਅਗਸਤ 2023: ਸਮੁੱਚੀ ਮਨੁੱਖਤਾ ਦੇ ਏਕੇ ਨੂੰ ਪ੍ਰਣਾਈ ਸ਼੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਦੇ ਪਿੰਡ ਚੱਕ ਸ਼ੇਰੇਵਾਲਾ ਦੀ ਜੋਤੀ ਫਾਊਂਡੇਸ਼ਨ ਇਨਸਾਨੀਅਤ ਦੀ ਪਹਿਰੇਦਾਰ ਬਣ ਕੇ ਮੁੱਢ ਤੋਂ ਹੀ ਲੋਕਾਂ ਦੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਕਰਦੀ ਆ ਰਹੀ ਹੈਸ..ਹ',
      image: '/images/blog/new123asd.jpg',
      link: 'https://www.babushahi.com/punjabi/full-news.php?id=223268',
    },
    {
      date: '06',
      month: 'Jun',
      title: 'British news network',
      description:
        'Mumbai (Maharashtra) [India], February 28 (ANI/NewsVoir): The Joti Foundation was created in loving memory of Late Prabjot Singh Brar, our father and the true inspiration behind the initiative.',
      image: '/images/blog/b1.JPG',
      link: 'https://www.britishnewsnetwork.com/news/joti-foundation-initiates-one-of-the-biggest-donation-drives-redistributing-happiness20220228153359/',
    },
    {
      date: '01',
      month: 'Mar',
      title: 'Entrepreneur view',
      description:
        'In the loving memory of Late Prabjot Singh Brar, our father and a self-made philanthropist is the true inspiration behind Joti Foundation. A leader with a great heart and magnanimous spirit he guided and supported many families...',
      image: '/images/blog/b1.JPG',
      link: 'https://entrepreneurview.in/joti-foundation-initiated-one-of-the-biggest-donation-drives-redistributing-happiness/',
    },
    {
      date: '01',
      month: 'Mar',
      title: 'News Kerala',
      description:
        'A leader with a great heart and magnanimous spirit he guided and supported many families, leading to the development and expansion of his area. Following his legacy, his wife Sarabjit Kaur and children...',
      image: '/images/blog/b1.JPG',
      link: 'https://www.newkerala.com/news/2022/32193.htm#:~:text=Joti%20Foundation%20initiated%20one%20of%20the%20biggest%20donation,medal%20winner%20in%20shotgun%20for%20Punjab%20University%2C%20Late',
    },
    {
      date: '28',
      month: 'Feb',
      title: 'Business Standard',
      description:
        'Mumbai (Maharashtra) [India], February 28 (ANI/NewsVoir): The Joti Foundation was created in loving memory of Late Prabjot Singh Brar, our father and the true inspiration behind the initiative.',
      image: '/images/blog/b1.JPG',
      link: 'https://www.business-standard.com/content/press-releases-ani/joti-foundation-initiates-one-of-the-biggest-donation-drives-redistributing-happiness-122022801125_1.html',
    },
    {
      date: '21',
      month: 'Nov',
      title: 'Joti Foundation Is Brightening The Lives Of The Needy',
      description:
        'Joti Foundation is a non – profit organization which came into existence in 2020 with the single pointed agenda of rendering selfless service to the human..',
      image: '/images/blog/b2.jpg',
      link: 'https://khabrimedia.com/joti-foundation-is-brightening-the-lives-of-the-needy/',
    },
  ]

  return (
    <>
      <Head>
        <title>Joti Foundation | News And Media</title>
        <meta
          name='description'
          content="Stay updated with the latest news and media coverage about Joti Foundation's initiatives and impact in communities."
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>

      {/* Page Banner Section */}
      <section className='page-banner'>
        <div
          className='image-layer lazy-image'
          style={{ backgroundImage: "url('/images/bg5.jpg')" }}
        ></div>
        <div className='bottom-rotten-curve'></div>
        <div className='auto-container'>
          <h1>News And Media</h1>
          <ul className='bread-crumb clearfix'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='active'>News And Media</li>
          </ul>
        </div>
      </section>

      {/* News Content */}
      <div className='sidebar-page-container'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Content Side */}
            <div className='content-side col-lg-12 col-md-12 col-sm-12'>
              {/* Blog Posts */}
              <div className='blog-posts'>
                <div className='row clearfix'>
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      className='news-block col-lg-4 col-md-4 col-sm-12'
                    >
                      <div className='inner-box'>
                        <div className='image-box'>
                          <figure className='image'>
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className='lazy-image loaded'
                                style={{ objectFit: 'cover' }}
                              />
                            </a>
                          </figure>
                        </div>
                        <div className='lower-content'>
                          <div className='date'>
                            {item.date}
                            <span className='month'>{item.month}</span>
                          </div>
                          <h3>
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {item.title}
                            </a>
                          </h3>
                          <div className='text'>{item.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
