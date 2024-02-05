// Importation des hooks useState et useEffect depuis la bibliothèque React
import { useState, useEffect } from "react"

// Définition d'un hook personnalisé useFetchData qui prend une URL en paramètre
export function useFetchData(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error)
      }
    }

    fetchData()
  }, [url])

  return data
}
