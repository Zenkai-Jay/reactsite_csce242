import "../css/Dialogs.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteFood = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/foods/${props._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setResult("Food item deleted successfully.");
        props.onDelete(props._id);
        props.closeDialog();
        props.closeFoodsDialog();
      } else {
        setResult(`Failed to delete food item. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Delete request failed:", error);
      setResult("Delete request failed.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete {props.title}?</p>
          <button onClick={deleteFood}>Yes</button>
          <button onClick={props.closeDialog}>No</button>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;