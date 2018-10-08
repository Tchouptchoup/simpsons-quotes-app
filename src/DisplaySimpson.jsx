import React from 'react';

const DisplaySimpson = ({ simpson }) => {
    return (
        <div className="DisplaySimpson">
            <p>{simpson.character}</p>
            <img src={simpson.image} alt="picture" />
            <p>{simpson.quote}</p>
        </div>
    );
};

export default DisplaySimpson;