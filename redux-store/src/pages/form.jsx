import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

function Form() {
  const [experience, setExperience] = useState("Expert");
  const [form, setForm] = useState({
    dropdown: experience,
    name: "",
    age: "",
  });

  const { dropdown, name, age } = form;

  const dropDownChange = (e) => {
    setExperience(e.target.value);
    console.log(experience);
  };

  const handleChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  useEffect(() => {
    setForm({ ...form, dropdown: experience, name: name, age: age });
  }, [experience, name, age]);

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser /> Sign Up
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Choose your level of Experience:</label>
            <select onChange={dropDownChange} value={experience}>
              <option value="Expert">Expert</option>
              <option value="Senior">Senior</option>
              <option value="Junior">Junior</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              placeholder="Enter age"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
