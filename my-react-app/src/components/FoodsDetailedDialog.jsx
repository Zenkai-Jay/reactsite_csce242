import "../css/Dialogs.css";
import React, {useState}  from "react";
import EditDialog from "./Edit-Dialog";

const FoodsDetailedDialog = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [Food, setFood] = useState(props);


  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const editFood = (updatedFood) => {
    setFood(updatedFood);
  };

  return (

    <div id="food-dialog" className="w3-modal">
        <div className="w3-modal-content">
            <div className="w3-container">
                <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeFoodsDialog}>
                    &times;
                </span>

               {showEditDialog ? (
               <EditDialog 
               closeDialog={closeEditDialog} 
               editFood={editFood}
                _id={props._id}
                title={props.title}
                img_name={props.img_name}
                category={props.category}
                prep_time={props.prep_time}
                servings={props.servings}
                description={props.description}
               /> 
               ) : (
               ""
               )}

                <section className="info">
                  <header className="columns">
                    <section id="change-buttons">
                      <a href="#onEdit" onClick={openEditDialog}>
                        &#9998;
                      </a>
                      <a href="#">
                        &#x2715;
                      </a>
                    </section>

                  </header>

                </section>

                <div id="foods-dialog-content">
                  <div className="columns">
                    <div id="dialog-content">
                      <h3>{props.title}</h3>
                      <p>{props.category}</p>
                      <p>{props.prep_time}</p>
                      <p>{props.servings}</p>
                      <p>{props.description}</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  
  );
};

export default FoodsDetailedDialog;
