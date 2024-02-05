import { useFetchData } from "../hookCustom/useFetchData"
import Banner from "../components/Banner"
import AppartmentCard from "../components/AppartmentCard"
import HomeBannerImg from "../assets/accueil-img.png"
import "../styles/home.scss"

// Définition du composant principal de la page d'accueil
export default function Home() {
  const appartmentsList = useFetchData(`${process.env.PUBLIC_URL}/data.json`)

  const homeBannerDatas = {
    image: HomeBannerImg,
    alt: "Océan et falaise",
    title: (
      <h1 className="banner-title">
        Chez vous,&nbsp;
        <br className="title-break" />
        partout et ailleurs
      </h1>
    ),
  }

  return (
    <main>
      <Banner bannerDatas={homeBannerDatas} />
      <div className="home-content">
        {appartmentsList.map((item) => (
          <AppartmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
