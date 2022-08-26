import React, { useState } from "react";
import style from "./cssStyle/app.css";
import { useEffect } from "react";
import Axios from "axios";

function App() {

const [name, setName] = useState("");
const [url, setUrl] = useState([]);

useEffect(()=>{
  Axios.get("https://api.genderize.io/?name=" + name).then((value)=>{
    setUrl([
      value.data["name"],
      value.data["gender"],
      value.data["probability"],
      value.data["count"]
    ])
  })
})

  return (
    <div className="App">
      <form>
        <input type="text" onChange={(event)=>{
          setName(event.target.value);
        }}/>
        <p>
          <ul>
            <li>Name: {url[0]}</li>
            <li>Gender: {url[1]}</li>
            <li>Probability: {url[2]}</li>
            <li>Count: {url[3]}</li>
          </ul>
        </p>
      </form>
    </div>
  );
}

export default App;
