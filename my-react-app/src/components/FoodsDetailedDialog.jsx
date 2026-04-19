import "../css/Dialogs.css";
import React, { useState } from "react";
import EditDialog from "./Edit-Dialog";
import DeleteDialog from "./Delete-Dialog";

const FoodsDetailedDialog = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [food, setFood] = useState(props);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editFood = (updatedFood) => {
    setFood(updatedFood);
  };

  return (
    <div id="food-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeFoodsDialog}
          >
            &times;
          </span>

          {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
              closeFoodsDialog={props.closeFoodsDialog}
              title={food.title}
              _id={food._id}
              onDelete={props.onDelete}
            />
          ) : null}

          {showEditDialog ? (
            <EditDialog
              closeDialog={closeEditDialog}
              editFood={editFood}
              onEdit={props.onEdit}
              _id={food._id}
              title={food.title}
              img_name={food.img_name}
              category={food.category}
              prep_time={food.prep_time}
              servings={food.servings}
              description={food.description}
            />
          ) : null}

          <section className="info">
            <header className="columns">
              <section id="change-buttons">
                <button type="button" onClick={openEditDialog}>
                  &#9998;
                </button>
                <button type="button" onClick={openDeleteDialog}>
                  &#x2715;
                </button>
              </section>
            </header>
          </section>

          <div id="foods-dialog-content">
            <div className="columns">
              <div id="dialog-content">
                <h3>{food.title}</h3>
                <p>{food.category}</p>
                <p>{food.prep_time}</p>
                <p>{food.servings}</p>
                <p>{food.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsDetailedDialog;