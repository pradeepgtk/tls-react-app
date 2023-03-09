import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: "sdfsd",
      pass: "ddsd"
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    fetch("https://tls-node-server-osf3.onrender.com", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
