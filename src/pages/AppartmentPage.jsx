import { useFetchData } from "../hookCustom/useFetchData";
import Gallery from "../components/Gallery";
import AppartmentDetail from "../components/AppartmentDetail";
import Collapse from "../components/Collapse";
import { Navigate, useParams } from "react-router-dom";

export default function AppartmentPage() {
  const appartmentsList = useFetchData(`${process.env.PUBLIC_URL}/data.json`);

  const { id } = useParams();
  const appartment = appartmentsList.find((appart) => appart.id === id);

  if (!appartmentsList.length) {
    return null; // Retournez quelque chose, par exemple un message de chargement
  }

  if (!appartment) {
    return <Navigate to="/erreur" />;
  }

  const { description, equipments } = appartment;

  return (
    <main>
      <Gallery appartment={appartment} />
      <AppartmentDetail appartment={appartment} />

      <div className="logement-collapse">{/* Collapse pour la description */}
      <Collapse title="Description" txt={description} />

      {/* Collapse pour les équipements */}
      <Collapse title="Équipements" txt={equipments.map(item => <li>{item}</li>)} />
      </div>
    </main>
  );
}
