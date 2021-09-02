import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  // {
  //   label: 'Hindi',
  //   value: 'hi',
  // },
  {
    label: 'Marathi',
    value: 'mr'
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="ui">
     
      <div className="ui grid form">
        <div className="field fourteen wide centered column ">
          <label><h2>Enter English Text</h2></label>
          <textarea rows="3" value={text} onChange={(e) => setText(e.target.value)}  />
        </div>
      </div>
      <div className="ui grid">
        <div className="fourteen wide centered column ">
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      </div>
      </div>
      <br></br>
      <hr />
      
      <div className="ui grid">
        <div className="fourteen wide centered column ">
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
      </div>
      </div>
    </div>
  );
};

export default Translate;
