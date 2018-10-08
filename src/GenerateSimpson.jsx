import React from 'react';

const GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div className="GenerateSimpson">
            <button onClick={selectSimpson}>Get a simpson</button>
        </div>
    );
};

export default GenerateSimpson;
