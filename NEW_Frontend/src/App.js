import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TrackingTable from './components/TrackingTable';

function App() {
  const [medicineName, setMedicineName] = useState('');
  const [personalSpecs, setPersonalSpecs] = useState('');
  const [medicineData, setMedicineData] = useState(null);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("Ingredients");

  const fetchMedicineData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/medicine/${medicineName}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setMedicineData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMedicineData(null);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>MediScan</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter medicine name (e.g., Paracetamol)"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
          <button onClick={fetchMedicineData}>Get Info</button>
        </div>
        <textarea
          placeholder="Enter personal specifications (allergies, conditions, etc.)"
          value={personalSpecs}
          onChange={(e) => setPersonalSpecs(e.target.value)}
          rows="3"
        ></textarea>
      </div>

      <div className="content-area">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
        <div className="main-content-wrapper">
          {activeSection === "Tracking Table" ? (
            <TrackingTable />
          ) : (
            <MainContent activeSection={activeSection} medicineData={medicineData} medicineName={medicineName} />
          )}
        </div>
      </div>

      <footer className="disclaimer">
        <p>This tool is for educational purposes only, not a substitute for professional medical advice.</p>
      </footer>
    </div>
  );
}

export default App;
