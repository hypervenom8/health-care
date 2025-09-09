import React from 'react';

const MainContent = ({ activeSection, medicineData }) => {
  if (!medicineData) {
    return <div className="main-content">Please search for a medicine to see details.</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "Ingredients":
        return (
          <div>
            <h3>Ingredients:</h3>
            <ul>
              {medicineData.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case "Dosage":
        return (
          <div>
            <h3>Dosage:</h3>
            <p>Normal: {medicineData.dosage.normal}</p>
          </div>
        );
      case "Side Effects":
        return (
          <div>
            <h3>Side Effects:</h3>
            <ul>
              {medicineData.side_effects.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>How to Tackle Side Effects:</h3>
            <ul>
              {Object.entries(medicineData.how_to_tackle_side_effects).map(([key, value]) => (
                <li key={key}>{key.replace(/_/g, ' ')}: {value}</li>
              ))}
            </ul>
          </div>
        );
      case "Who Should Avoid":
        return (
          <div>
            <h3>Who Should Avoid:</h3>
            <ul>
              {medicineData.who_should_avoid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case "Severity Dosage":
        return (
          <div>
            <h3>Severity-based Dosage:</h3>
            <ul>
              {Object.entries(medicineData.dosage.severity_based).map(([key, value]) => (
                <li key={key}>{key.replace(/_/g, ' ')}: {value}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default MainContent;
