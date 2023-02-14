import React from "react";


const Character = ({ name, image }) => {
    return (
        <div className="character">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Character