import React from 'react';
import * as Button from '../button';
import Add from '../Add.js';
import './input-container.css';

const InputContainer = props => {
	console.log('Input Container props', props);
  return (
    <div className="inputContainer">
    	<h2>Input a Topic (Input Container)</h2>
    </div>
  );
};

export default InputContainer;