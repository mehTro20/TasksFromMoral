import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputCar, setInputCar] = useState("");
  const [selectedColor, setSelectedColor] = useState("red");
  const [showData, setShowData] = useState([]);

  const problems = [
    "Broken Transmission ",
    "Sensors Not Working ",
    "Cracked Windscreen ",
  ];
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [form, setForm] = useState({
    brand: inputCar,
    color: selectedColor,
    issues: selectedProblems,
  });

  const dropDownChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleCheckBox = (e) => {
    const { value } = e.target;

    if (selectedProblems.includes(value)) {
      setSelectedProblems(
        selectedProblems.filter((option) => option !== value)
      );
    } else {
      setSelectedProblems([...selectedProblems, value]);
    }
  };

  useEffect(() => {
    setForm({
      ...form,
      brand: inputCar,
      color: selectedColor,
      issues: selectedProblems,
    });
  }, [selectedColor, selectedProblems]);

  useEffect(() => {
    axios.get(`http://localhost:4200/cars`).then((res) => {
      console.log(res.data);
      setShowData(res.data);
      // console.log(showData);
    });
  }, []);

  const handleChange = (e) => {
    setInputCar(e.target.value);
    setForm({
      ...form,
      brand: inputCar,
      color: selectedColor,
      issues: selectedProblems,
    });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    axios.post(`http://localhost:4200/cars`, { form }).then((res) => {
      console.log(res);
      console.log(res.data);
      return res.data;
      // setShowData(res.data);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Car Brand: <input type="text" name="brand" onChange={handleChange} />
        </label>
        <label>Choose your color:</label>
        <select onChange={dropDownChange} value={selectedColor}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
        <div className="checkBox-section">
          <>
            {problems.map((options, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  value={options}
                  onChange={handleCheckBox}
                  checked={selectedProblems.includes(options)}
                />
                {options}
              </div>
            ))}
          </>
        </div>
        <button type="submit">Add Car</button>
      </form>
      <div className="database-data">
        {showData.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.brand}</h4>
              <p>{item.color}</p>
              <p>{item.problems}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
