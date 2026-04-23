import "../css/Dialogs.css";
import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    title: props.title,
    category: props.category,
    prep_time: props.prep_time,
    servings: props.servings,
    description: props.description,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(
    props.img_name ? `http://localhost:3001/${props.img_name}` : ""
  );
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("category", inputs.category);
    formData.append("prep_time", inputs.prep_time);
    formData.append("servings", inputs.servings);
    formData.append("description", inputs.description);

    if (selectedImage) {
      formData.append("img", selectedImage);
    }

    try {
      const response = await fetch(`http://localhost:3001/api/foods/${props._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const updatedFood = await response.json();
        setResult("Success! Food Updated!");
        props.editFood(updatedFood);
        props.onEdit(updatedFood);
        props.closeDialog();
      } else {
        const text = await response.text();
        setResult(text);
      }
    } catch (error) {
      console.error("Update request failed:", error);
      setResult("Update request failed.");
    }
  };

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
                name="img"
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

          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;