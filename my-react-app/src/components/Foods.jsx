import { useState } from "react";
import"../css/Foods.css";
import FoodsDialog from "./FoodsDetailedDialog";

const Foods = (props) => { 
    const [showDialog, setShowDialog] = useState(false);

    const showFoodDetails = () => {
        setShowDialog(true);
        console.log("here");
    };

    const closeFoodsDialog = () => {
        setShowDialog(false);
        console.log("closed");
    };

    return (
        <>
        {showDialog?(
            <FoodsDialog 
            closeFoodsDialog={closeFoodsDialog}
            _id={props._id}
            title={props.title}
            img_name={props.img_name}
            category={props.category}
            prep_time={props.prep_time}
            servings={props.servings}
            description={props.description} />
            

        ):("")}
       <section className="food">
                <img src={`https://demo-backend-niit.onrender.com//${props.img_name}`} alt="recipe" onClick={showFoodDetails}/>
                <div className="food-description">
                    <h3>{props.title}</h3>
                </div>
            </section>
        </>
    );
};

export default Foods;