import Card from '#models/card'
import SlideCard from '~/components/SlideCard'
import { gsap } from 'gsap'
import { router } from '@inertiajs/react'

export default function Home(props: { cards: Card[] }) {
  const { cards } = props

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const animationDeleteSlide = async (slideId: number) => {
    const slideElement = document.getElementById(`slide-${slideId}`)
    if (!slideElement) return

    gsap.to(slideElement, {
      y: -20,
      opacity: 0,
      duration: 0.2,
    })
    const allSlides = Array.from(document.querySelectorAll(`.slide-card`))
    const slideIndex = allSlides.indexOf(slideElement)
    const slidesToRight = allSlides.slice(slideIndex + 1)

    gsap.to(slidesToRight, {
      x: '-=308',
      duration: 0.7,
      stagger: 0.06,
      ease: 'power3.out',
    })
    await sleep(1000)
    router.post(`card/${slideId}`, {
      slideId,
    })
  }

  return (
    <div>
      <h1>Home</h1>
      <ul className={'containerSlides'}>
        {cards.map((slide) => (
          <li key={slide.id} id={`slide-${slide.id}`} className="slide-card">
            <SlideCard
              onClick={() => animationDeleteSlide(slide.id)}
              key={slide.id}
              title={slide.title}
              isAddingPresentation={false}
              content={slide.title}
            />
          </li>
        ))}
        <li className="slide-card">
          <SlideCard
            onClick={() => router.post('/create')}
            isAddingPresentation={true}
            title={''}
            content={''}
          />
        </li>
      </ul>
    </div>
  )
}
