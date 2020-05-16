import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [dataFile, setDataFile] = useState([]);

  const Test = async () => {
    const unch = await axios.get("http://localhost:6969/");
    setDataFile(unch.data);
  };

  useEffect(() => {
    Test();
  }, []);

  return (
    <div className="App">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>NOSBK</th>
            <th>NAMA</th>
            <th>KETERANGAN</th>
          </tr>
        </thead>

        <tbody>
          {dataFile.map((item) => (
            <tr key={item.NOSBK}>
              <td>{item.NOSBK}</td>
              <td>{item.NAMA}</td>
              <td>{item.KETER1}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button style={{ marginTop: "30px" }} onClick={Test}>
        Submit
      </button> */}
    </div>
  );
}

export default App;
