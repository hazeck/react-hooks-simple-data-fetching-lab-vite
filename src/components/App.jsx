import React, { useState, useEffect } from 'react';

function App() {

  const [dogImage, setDogImage] = useState('');
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchDogImage();
  }, []);


  const fetchDogImage = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json()) 
      .then(data => {
        setDogImage(data.message); 
        setLoading(false);  
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
        setLoading(false); 
      });
  };

  const handleButtonClick = () => {
    fetchDogImage();
  };

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      <button onClick={handleButtonClick}>Get Random Dog Image</button>

      {/* Show "Loading..." while fetching */}
      {loading ? (
        <p>Loading...</p>  
      ) : (
        <img src={dogImage} alt="Random Dog" />
      )}
    </div>
  );
}

export default App;
