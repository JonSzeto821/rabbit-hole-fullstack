import React from 'react';
import * as Button from '../button';
import Add from '../Add.js';
import './topic-container.css';

const TopicContainer = props => {
	console.log('Topic Container props', props);
  return (
    <div className="topicContainer">
    	<h2>Review Topic (Topic Container)</h2>
    	<p>Sentence from the Wiki article that contains the Topic Link</p>
    	<div>
    		<Button.Read
		      text='Read'
		      onClick={() => {console.log('Read clicked')}}
		      buttonSize={Button.SIZES.MED}
		    />
		    <Button.Continue
		      text='Continue' 
		      type='submit' 
		      onClick={() => {console.log('Continue clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Save
		      text='Save'
		      onClick={() => {console.log('Save clicked')}}
		      buttonSize={Button.SIZES.MED}
		    />
    	</div>
    </div>
  );
};

export default TopicContainer;