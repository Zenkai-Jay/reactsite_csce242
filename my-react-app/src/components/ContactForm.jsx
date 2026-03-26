import { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ac1a39c8-51bf-4af4-bb11-ecf256d43cbb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (

    <form onSubmit={onSubmit}>
        <h1>Contact Us</h1>
      <input type="text" name="name" required/>
      <input type="email" name="email" required/>
      <textarea name="message" required></textarea>
      <button type="submit">Submit Form</button>
      <span>{result}</span>
    </form>
  );
}

export default ContactForm;
