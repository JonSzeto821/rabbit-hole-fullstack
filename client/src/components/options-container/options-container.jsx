import React from 'react';
import * as Button from '../button/button';
import './options-container.css';
import TopicContainer from '../topic-container/topic-container';

const OptionsContainer = props => {
	console.log('topicProps', props.topicProps);
	let topicList = props.topicProps;

	let renderTopics = topicList.map((topic, i) => {
		let trimmed = topic.replace('wiki/', '');
		console.log(trimmed);

		return(
         	<Button.Topic
				key={i}
				text={trimmed} 
				type='submit' 
				onClick={() => {console.log(`Topic ${i} clicked`)}}
				// buttonSize={Button.SIZES.LARGE}
				className='topic'
			/>
		);
	});

  return (
    <div className="optionContainer">
    	<h2>Select an Option (Option Container)</h2> 
		<div className="btnContainer">{renderTopics}</div>
		<TopicContainer />
    </div>
  );
};

export default OptionsContainer;