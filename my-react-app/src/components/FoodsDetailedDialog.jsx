import "../css/Dialogs.css";

const FoodsDetailedDialog = (props) => {

  return (

    <div id="food-dialog" className="w3-modal">
        <div className="w3-modal-content">
            <div className="w3-container">
                <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeFoodsDialog}>
                    &times;
                </span>

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
