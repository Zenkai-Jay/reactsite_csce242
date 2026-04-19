import "../css/Dialogs.css";
import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    img_name: props.img_name,
    category: props.category,
    prep_time: props.prep_time,
    servings: props.servings,
    description: props.description,
  });

  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setInputs((values) => ({ ...values, img_name: file }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData();
    console.log("Submitting with inputs:" + props._id);
    formData.append("title", inputs.title);
    formData.append("category", inputs.category);
    formData.append("prep_time", inputs.prep_time);
    formData.append("servings", inputs.servings);
    formData.append("description", inputs.description);

if (inputs.img_name instanceof File) {
  formData.append("img_name", inputs.img_name);
}
    console.log(props._id);
    const response = await fetch(`http://localhost:3001/api/foods/${props._id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      setResult("Success! Food Updated!");
      props.editFood(await response.json());
      props.closeDialog();
    } else {
      const text = await response.text();
      console.log("Error updating food:", text);
      setResult(text);
    }
  };

  const previewSrc =
    inputs.img_name instanceof File
      ? URL.createObjectURL(inputs.img_name)
      : inputs.img_name
      ? `http://localhost:3001/${inputs.img_name}`
      : "";

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>

          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
              />
            </p>

            <section className="columns">
              <p id="img-preview">
                {previewSrc && <img id="img" src={previewSrc} alt="Preview" />}
              </p>
            </section>

            <p id="img-upload">
              <label htmlFor="img_name">Upload Image</label>
              <input
                type="file"
                id="img_name"
                name="img_name"
                onChange={handleImageChange}
                accept="image/*"
              />
            </p>

            <p>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={inputs.category}
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="prep_time">Preparation Time:</label>
              <input
                type="text"
                id="prep_time"
                name="prep_time"
                value={inputs.prep_time}
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="servings">Servings:</label>
              <input
                type="text"
                id="servings"
                name="servings"
                value={inputs.servings}
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleChange}
              />
            </p>

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;