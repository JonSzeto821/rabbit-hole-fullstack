import React from 'react';
import * as Button from '../button/button';
import './options-container.css';
import TopicContainer from '../topic-container/topic-container';

const OptionsContainer = props => {
	console.log('Options', props);
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
		      className='topic'
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='topic'
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='topic'
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='topic'
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='topic'
		    />
		    <Button.Topic
		      text='Topic' 
		      type='submit' 
		      onClick={() => {console.log('Topic clicked')}}
		      buttonSize={Button.SIZES.LARGE}
		      className='topic'
		    />
		    <Button.Primary
				text='Button TEST' 
				type='submit' 
				onClick={(i) => {
					let str = '';
					for (var i = 0; i < 6; i++) {
						str = str + i;
					}
				console.log(str);
				}}
				buttonSize={Button.SIZES.LARGE}
				className='primary'
		    />
		</div>    
		
		    <TopicContainer />			
		
    </div>
  );
};

export default OptionsContainer;