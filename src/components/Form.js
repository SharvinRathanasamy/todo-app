import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <div>
        <label>Name:</label>
        <input name="name" onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input name="confirmPassword" type="password" onChange={handleChange} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const containerStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "1rem",
  textAlign: "center",
};

export default Form;
