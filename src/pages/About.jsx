import Banner from "../components/Banner"
import CollapseContainer from "../components/CollapseContainer"
import AboutBannerImg from "../assets/a-propos_img.png"

// Définition des données pour la bannière "À propos"
const aboutBannerDatas = {
  image: AboutBannerImg,
  alt: "Paysage de montagnes",
  title: <h1 className="banner-title about">À propos</h1>,
}

// Définition du composant principal de la page "À propos"
export default function About() {
  return (
    <main>
      <Banner bannerDatas={aboutBannerDatas} />
      <CollapseContainer pageType={"about"} />
    </main>
  )
}
