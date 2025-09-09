import React from 'react';

const MainContent = ({ activeSection, medicineData, medicineName }) => {
  if (!medicineData) {
    return <div className="main-content">Please search for a medicine to see details.</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "Ingredients":
        return (
          <div>
            <h3>Ingredients:</h3>
            {Array.isArray(medicineData.ingredients) && medicineData.ingredients.length > 0 ? (
              <ul>
                {medicineData.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{medicineData.ingredients}</p>
            )}
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
            {Array.isArray(medicineData.side_effects) && medicineData.side_effects.length > 0 ? (
              <ul>
                {medicineData.side_effects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{medicineData.side_effects}</p>
            )}
            <h3>How to Tackle Side Effects:</h3>
            <p>{medicineData.how_to_tackle_side_effects.info}</p>
          </div>
        );
      case "Who Should Avoid":
        return (
          <div>
            <h3>Who Should Avoid:</h3>
            {Array.isArray(medicineData.who_should_avoid) && medicineData.who_should_avoid.length > 0 ? (
              <ul>
                {medicineData.who_should_avoid.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{medicineData.who_should_avoid}</p>
            )}
          </div>
        );
      case "Severity Dosage":
        return (
          <div>
            <h3>Severity-based Dosage:</h3>
            <p>{medicineData.dosage.severity_based.info}</p>
          </div>
        );
      case "Indications": // New case for Indications
        return (
          <div>
            <h3>Indications and Usage:</h3>
            {Array.isArray(medicineData.indications) && medicineData.indications.length > 0 ? (
              <ul>
                {medicineData.indications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{medicineData.indications}</p>
            )}
          </div>
        );
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="main-content">
      {medicineData.medicineName && <h2>{medicineData.medicineName}</h2>}
      {renderContent()}
    </div>
  );
};

export default MainContent;
