import React, {useEffect} from "react";
import axios from "axios";
import "./App.css";



function App() {

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        // const data = response.data.message;
        console.log(response);
        // Save to KeyState
        // setData(data);
  
      });
  }, []);

  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
    </div>
  );
}

export default App;
