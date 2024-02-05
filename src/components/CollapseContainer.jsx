import { useState } from "react"
import Collapse from "./Collapse"

// Définition du composant CollapseContainer qui contient des données pour les sections de collapse
export default function CollapseContainer({ pageType, appartment = {} }) {
  const collapseAppartmentData = [
    {
      title: "Description",
      content: appartment.description,
      collapseKey: "description",
    },
    {
      title: "Équipements",
      content: appartment.equipments
        ? appartment.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))
        : [],
      collapseKey: "equipements",
    },
  ]

  const collapseAboutData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      collapseKey: "fiabilite",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      collapseKey: "respect",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      collapseKey: "service",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      collapseKey: "securite",
    },
  ]

  let dataToShow
  if (pageType === "appartment") {
    dataToShow = collapseAppartmentData
  } else if (pageType === "about") {
    dataToShow = collapseAboutData
  }

  const [collapseStates, setCollapseStates] = useState(() => {
    const initialState = {}
    dataToShow.forEach((item) => {
      initialState[item.collapseKey] = false
    })
    return initialState
  })

  const collapseToggle = (collapseKey) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }))
  }

  return (
    <Collapse
      pageType={pageType}
      dataToShow={dataToShow}
      collapseStates={collapseStates}
      collapseToggle={collapseToggle}
    />
  )
}
