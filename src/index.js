import React from "react";
import "./dist/index.css"

const Alert = ({ alertMessage, alertType }) => {
    return (
        <div className={`alert alert-${alertType}`} role="alert">
            {alertMessage}
        </div>
    );
};

export default Alert;