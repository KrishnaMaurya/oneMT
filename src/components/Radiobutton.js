import React, {useState} from 'react';

const Radiobutton = ({option}) => {
    
    return (
        <div className="ui form">
            <div className="field">
                <input type="radio" option={option} ></input>
            </div>
        </div>
    );
}

export default Radiobutton;