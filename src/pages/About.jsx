import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import AboutBannerImg from "../assets/a-propos_img.png"

const apropos = [
  {
    title: "Fiabilité",
    txt: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    txt: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    txt: "Notre équipe dévouée est là pour rendre votre séjour inoubliable. De la réservation à l'arrivée et au départ, nous sommes à votre disposition pour répondre à toutes vos questions et vous assurer une expérience sans souci. La propreté, le confort et la sécurité de nos propriétés sont notre priorité, et nous veillons à ce que chaque logement réponde aux normes les plus élevées.",
  },
  {
    title: "Sécurité",
    txt: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const aboutCollapses = apropos.map((content, index) => {
  return (
    <div key={index}>
      <Collapse title={content.title} txt={content.txt} />
    </div>
  );
});

const Apropos = () => {
  return (
    <div className="main-container">
      <Banner bannerDatas={aboutBannerDatas} />
      <div className="apropos-collapse">{aboutCollapses}</div>
    </div>
  );
};

// Définition des données pour la bannière "À propos"
const aboutBannerDatas = {
  image: AboutBannerImg,
  alt: "Paysage de montagnes",
  title: <h1 className="banner-title about">À propos</h1>,
}

export default Apropos;
