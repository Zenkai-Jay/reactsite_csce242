import Dialog from "./FoodsDetailedDialog";
import { useState } from "react";
import "../css/RecipeCard.css";

const RecipeCard = (props) => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <section className="food">
      <img
        src={`https://demo-backend-niit.onrender.com/${props.img_name}`}
        alt="recipe"
        onClick={openDialog}
      />
      <div className="food-description">
        <h3>{props.title}</h3>
      </div>

      {showDialog && (
        <Dialog
          {...props}
          closeFoodsDialog={closeDialog}
        />
      )}
    </section>
  );
};

export default RecipeCard;