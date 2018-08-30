import React from 'react';
import * as Button from '../button/button';
import Add from '../Add.js';
import './topic-container.css';
import ReadTemplate from '../read-template/read-template';

const TopicContainer = props => {
	console.log('Topic Container props', props);

	let setAlert = () => {
		alert('Save button clicked!');
	}

  return (
    <div className="topicContainer">
    	<h2>Review Topic (Topic Container)</h2>
    	<p>Sentence from the Wiki article that contains the Topic Link</p>
    	<div>
    		<Button.Read
		      text='Read'
		      onClick={() => {console.log('Read clicked')}}
		      buttonSize={Button.SIZES.MED}
		      className='read'
		    />
		    <Button.Continue
		      text='Continue' 
		      type='submit' 
		      onClick={() => {console.log('Continue clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='continue'
		    />
		    <Button.Save
		      text='Save'
		      onClick={setAlert}
		      buttonSize={Button.SIZES.MED}
		      className='save'
		    />
    	</div>
    	<ReadTemplate />
    </div>
  );
};

export default TopicContainer;