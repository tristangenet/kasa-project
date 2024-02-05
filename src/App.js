// Importation des composants
import Header from "./components/Header"
import Footer from "./components/Footer"
import Router from "./components/Router"

// Définition du composant principal de l'application
function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

// Exportation du composant App pour qu'il puisse être utilisé ailleurs dans l'application
export default App
