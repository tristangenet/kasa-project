import arrowLeft from "../assets/arrow_left.svg"
import arrowRight from "../assets/arrow_right.svg"
import "../styles/gallery.scss"
import { useState } from "react"

// Définition du composant Gallery qui représente la galerie d'images de l'appartement
export default function Gallery({ appartment }) {
  const [count, setCount] = useState(0)
  const [slideAnimation, setSlideAnimation] = useState(false)
  const totalImages = appartment.pictures.length

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount === 0 ? totalImages - 1 : prevCount - 1))
    setSlideAnimation(!slideAnimation)
    setTimeout(() => {
      setSlideAnimation(false)
    }, 300)
  }

  const increaseCount = () => {
    setCount((prevCount) => (prevCount === totalImages - 1 ? 0 : prevCount + 1))
    setSlideAnimation(!slideAnimation)
    setTimeout(() => {
      setSlideAnimation(false)
    }, 300)
  }

  return (
    <div className="gallery-content">
      <div className={`images-container ${slideAnimation ? "slide-anim" : ""}`}>
        <img
          src={appartment.pictures[count]}
          alt="Photos de l'appartement"
          className="appart-detail-img"
        />
        {totalImages > 1 && (
          <p className="image-counter">
            {count + 1}/{totalImages}
          </p>
        )}
      </div>
      {totalImages > 1 && (
        <button
          className="gallery-btn gallery-btn-left"
          onClick={decreaseCount}
        >
          <img
            src={arrowLeft}
            alt="Défilement vers la gauche"
            className="arrow arrow-left"
          />
        </button>
      )}
      {totalImages > 1 && (
        <button
          className="gallery-btn gallery-btn-right"
          onClick={increaseCount}
        >
          <img
            src={arrowRight}
            alt="Défilement vers la droite"
            className="arrow arrow-right"
          />
        </button>
      )}
    </div>
  )
}
