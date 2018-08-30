import React from 'react';
import './read-template.css';

const ReadTemplate = props => {
	console.log('Read Template props', props);

	let href = 'https://wikipedia.org/';
	
  return (
    <div className="readTemplate">
    	<h2>['Topic Keyword Listed Here']</h2>
    	<h6>This sentence contains the topic keyword</h6>
    	<p>Click here to launch article: <a href={href} rel="noopener noreferrer" target="_blank">Wikipedia</a></p>
    </div>
  );
};

export default ReadTemplate;