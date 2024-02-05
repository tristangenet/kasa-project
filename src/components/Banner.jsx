import "../styles/banner.scss"

// Définition du composant Banner qui représente la bannière d'une page
export default function Banner({ bannerDatas }) {
  return (
    <div className="banner">
      <img
        src={bannerDatas.image}
        alt={bannerDatas.alt}
        className="banner-img"
      />
      {bannerDatas.title}
    </div>
  )
}
