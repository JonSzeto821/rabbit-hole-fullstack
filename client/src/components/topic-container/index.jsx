import React from 'react';
import * as Button from '../button';
import '../../styles/topicContainer.css';

const TopicContainer = props => {
  return (
    <div className="container">
    	<Button.Primary
	      text='Primary' 
	      type='submit' 
	      onClick={() => {console.log('Primary clicked')}}
	      buttonSize={Button.SIZES.LARGE}
	    />
	    <Button.Submit
	      text='Submit'
	      onClick={() => {console.log('Submit clicked')}}
	      buttonSize={Button.SIZES.MED}
	    />
		<Button.Topic
	      text='Topic' 
	      type='submit' 
	      onClick={() => {console.log('Topic clicked')}}
	      buttonSize={Button.SIZES.LARGE}
	    />
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
  );
};

export default TopicContainer;