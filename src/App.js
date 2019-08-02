import React, {useState, useEffect} from "react";
import axios from "axios";
import Apod from "./components/PhotoCard";
import "./App.css";


function App() {

  const [photo, setPhoto] = useState([]);
  // const [title, setTitle] = useState();
  // const [date, setDate] = useState([]);
  // const [text, setText] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response);

        const picture = response.data.url;

        // Set KeyState
        setPhoto(picture);
        console.log(photo);

      })

      .catch(err => {
        console.log('Oops.');

      });
  });

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
