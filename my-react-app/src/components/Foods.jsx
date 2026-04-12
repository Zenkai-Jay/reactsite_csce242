import { useState, useEffect } from "react";
import axios from "axios";
import"../css/Foods.css";
import FoodsDialog from "./FoodsDetailedDialog";
import AddFood from "../components/AddFood";

const Foods = (props) => {
    const [foods, setFoods] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    const openFoodDialog = () => {
        setShowDialog(true);
    };

    const showFoodDetails = () => {
        setShowDialog(true);
        console.log("here");
    };

    const closeFoodsDialog = () => {
        setShowDialog(false);
        console.log("closed");
    };

    const addFoodToList = (food) => {
        setFoods((foods) => [...foods, food]);
    };

    useEffect(() =>{
        const loadFoods = async () => {
            const renderLink = "https://demo-backend-niit.onrender.com/api/foods";
            const response = await axios.get(renderLink);
            setFoods(response.data);
    };

    loadFoods();
}, [])

    return (
        <>
         <button id="btn-add-food" onClick={openFoodDialog}>+</button>
        {showDialog?(<AddFood
            closeAddDialog={closeFoodsDialog}
            addFoodToList={addFoodToList}
            />):("")}
            
        <div id="foods" className="columns">
            {foods.map((food) => (
            <FoodsDialog 
            closeFoodsDialog={closeFoodsDialog}
            _id={props._id}
            title={props.title}
            img_name={props.img_name}
            category={props.category}
            prep_time={props.prep_time}
            servings={props.servings}
            description={props.description} />


            ))}

        </div>

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