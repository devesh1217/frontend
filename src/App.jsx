import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JunctionSelector from './components/JunctionSelector';
import './App.css';

const App = () => {
  const [selectedJunctions, setSelectedJunctions] = useState(4);
  const [fileInputs, setFileInputs] = useState(Array(4).fill(null));
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = (index, event) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = event.target.files[0];
    setFileInputs(newFileInputs);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (selectedJunctions > 0 && fileInputs.slice(0, selectedJunctions).every(file => file !== null)) {
      // Prepare the form data for the API call
      const formData = new FormData();
      
      // Define the direction names expected by the backend
      const directions = ['north', 'south', 'east', 'west'];
      
      // Append files to the formData with direction names
      fileInputs.slice(0, selectedJunctions).forEach((file, index) => {
        formData.append(directions[index], file);
      });
  
      // Call the API with the uploaded files
      fetch('http://127.0.0.1:5000/count_vehicles', {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Navigate to timer page if the API call is successful
        navigate('/timer', { state: { data } });
      })
      .catch((error) => {
        setLoading(false);  
        console.error('Error:', error);
        alert('Failed to submit the form, please try again.');
      });
    } else {
      setLoading(false);  
      alert('Please select the number of junctions and upload files for each.');
    }
  };
  

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="flashing-text">Welcome to ATCS System</h1>
      </header>
      <div className="content">
        <JunctionSelector setSelectedJunctions={setSelectedJunctions} />
        {Array.from({ length: selectedJunctions }).map((_, index) => (
          <div key={index} className="video-input">
            <h3>Upload Video for Junction {index + 1}</h3>
            <input
              type="file"
              onChange={(event) => handleFileChange(index, event)}
              accept="video/*"
            />
          </div>
        ))}
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      <footer className="footer">
        <p>Drive Safely and Ensure Safety.</p>
      </footer>
    </div>
  );
};

export default App;
