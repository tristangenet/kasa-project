import { useFetchData } from "../hookCustom/useFetchData"
import Gallery from "../components/Gallery"
import AppartmentDetail from "../components/AppartmentDetail"
import CollapseContainer from "../components/CollapseContainer"
// Importation des modules Navigate et useParams depuis le module "react-router-dom"
import { Navigate, useParams } from "react-router-dom"

// Définition du composant principal de la page d'appartement
export default function AppartmentPage() {
  const appartmentsList = useFetchData(`${process.env.PUBLIC_URL}/data.json`)

  const { id } = useParams()
  const appartment = appartmentsList.find((appart) => appart.id === id)

  if (!appartmentsList.length) {
    return
  }

  if (!appartment) {
    return <Navigate to="/erreur" />
  }
  return (
    <main>
      <Gallery appartment={appartment} />
      <AppartmentDetail appartment={appartment} />
      <CollapseContainer pageType={"appartment"} appartment={appartment} />
    </main>
  )
}
