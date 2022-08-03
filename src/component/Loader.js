import React from 'react';
import spinner from "../gif/spinner.svg";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading" style={{marginTop: "150px"}}/>
        </div>
    );
};

export default Loader;