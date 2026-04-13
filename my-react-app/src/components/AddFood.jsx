import "../css/Dialogs.css"
import { useState } from "react"

const AddFood = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };
    const addFoodToServer = async (e) => {
        e.preventDefault();
        setResult("Adding....");

        const formData = new FormData(e.target);
        console.log(...formData);

        const postURLRender = "https://demo-backend-niit.onrender.com/api/foods";
        const postLocal = "http://localhost:3001/api/foods";
        const response = await fetch(postLocal, {
            method: "POST",
            "body": formData
        });

        if(response.status === 201){
            setResult("Food added successfully!");
            props.closeAddDialog();
            props.addFoodToList(await response.json());
        } else {
            setResult("Failed to add food.");
        }
    };

    return(
        <div id="food-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                    id="dialog-close"
                    className="w3-button w3-display-topright"
                    onClick={props.closeAddDialog}
                    >
                        &times;
                    </span>
                    <div id="food-dialog-content">
                        <form onSubmit={addFoodToServer}>
                            <h3>Add Food</h3>

                            <p>
                                <label htmlFor="title">Food Title:</label>
                                <input type="text" id="title" name="title" required></input>
                            </p>

                            <p>
                                <label htmlFor="category">Food Category:</label>
                                <input type="text" id="category" name="category" required></input>
                            </p>

                            <p>
                                <label htmlFor="prep_time">Food Prep Time:</label>
                                <input type="number" id="prep_time" name="prep_time" required></input>

                            </p>

                            <p>
                                <label htmlFor="servings">Food Servings:</label>
                                <input type="number" id="servings" name="servings" required></input>
                            </p>

                            <p>
                                <label htmlFor="description">Food Description:</label>
                                <textarea id="description" name="description" required></textarea>
                            </p>

                            <section>
                                <p id="img-prev-section">
                                    {prevSrc==""? (""):(<img id="img-prev" src={prevSrc}/>)}
                                </p>

                                <p>
                                    <label htmlFor="img">Food Image:</label>
                                    <input type="file" id="img" name="img" accept="img/*" onChange={uploadImage}></input>
                                </p>
                            </section>
                            <p>
                                <button type="submit">Add Food</button>
                            </p>
                            <p>{result}</p>
                        </form>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default AddFood;
