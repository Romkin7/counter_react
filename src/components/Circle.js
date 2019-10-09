import React from "react";

const Circle = ({ backgroundColor, counter }) => {
    return (
    <div className={ "circle "+backgroundColor }>
        <p>{ counter }</p>
    </div>
    );
}

export default Circle;