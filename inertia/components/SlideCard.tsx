import styles from './SlideCard.module.css'

interface SlideProps {
  title: string
  onClick: () => void
  content: string
  isAddingPresentation: boolean
}

export default function SlideCard({
  title,
  onClick,
  content,
  isAddingPresentation,
}: SlideProps) {
  if (isAddingPresentation) {
    return (
      <div onClick={onClick} className={styles.container}>
        <h2>+</h2>
      </div>
    )
  }

  return (
    <div className={`${styles.container} ${styles.hoverEffect}`} onClick={onClick}>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
