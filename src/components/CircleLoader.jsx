import "../styles/CircleLoader.css";

import React from "react";

const CircleLoader = () => {
    return (
        <>
            <div className="lds-spinner mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default CircleLoader;
