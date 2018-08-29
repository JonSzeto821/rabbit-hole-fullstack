import React from 'react';
import * as Button from '../button';
import './options-container.css';
import TopicContainer from '../topic-container/topic-container';

const OptionsContainer = props => {
{/*	let displayMultiple = (i) => {
		let str = '';
		for (var i = 0; i < 9; i++) {
			str = str + i;
		}
		return(
			<div>{str}</div>
			);
	};*/}


  return (
    <div className="optionContainer">
    	<h2>Select an Option (Option Container)</h2>
	    <div className="btnContainer">
	    	<Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		    />
		    <TopicContainer />

	    	{/*<Button.Primary
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
		    />*/}
		</div>    
		<div>
			<button
			onClick={(i) => {
				let str = '';
				for (var i = 0; i < 6; i++) {
					str = str + i;
				}
				console.log(str);
			}}
			>Button TEST</button>
		</div>
    </div>
  );
};

export default OptionsContainer;