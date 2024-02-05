import ArrowBack from "../assets/arrow_back.png"
import "../styles/collapse.scss"

// Définition du composant Collapse qui représente les sections de collapse
export default function Collapse({
  pageType,
  dataToShow,
  collapseStates,
  collapseToggle,
}) {
  return (
    <div className={`collapses-container ${pageType}`}>
      {dataToShow.map((data, index) => (
        <div className="collapse-container" key={index}>
          <div className="collapse-title">
            <h2>{data.title}</h2>
            <button
              className="collapse-btn"
              onClick={() => collapseToggle(data.collapseKey)}
            >
              <img
                src={ArrowBack}
                alt={
                  collapseStates[data.collapseKey]
                    ? "Voir moins"
                    : "Voir plus de détails"
                }
                className={`arrow-back ${
                  collapseStates[data.collapseKey] ? "arrow-top" : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`collapse-content ${
              collapseStates[data.collapseKey] ? "collapse-visible" : ""
            }`}
          >
            {data.content}
          </div>
        </div>
      ))}
    </div>
  )
}
